import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
//import jwt_decode from 'jwt-decode';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';
import { EMAIL_CHANGED,PASSWORD_CHANGED, LOGIN, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, LOGIN_REMEMBER_ME } from './types';
import AsyncStorage from "@react-native-community/async-storage";

export const emailChanged = (email) => {
    return (dispatch) => {
        dispatch ({
            type: EMAIL_CHANGED,
            payload: email
        });
    };
};

export const passwordChanged = (password) => {
    return (dispatch) => {
        dispatch ({
            type: PASSWORD_CHANGED,
            payload: password
        });
    };
};
export const initRememberMe = () => async (dispatch) => {
    try {
        const isRemembered = await AsyncStorage.getItem('fcmToken')
        if (isRemembered === 'SAVED') {
          return dispatch({
            type: LOGIN_REMEMBER_ME,
            payload: true
          })
        }
        return dispatch({
          type: LOGIN_REMEMBER_ME,
          payload: false
        })
      } catch (e) {
        return null
      }
}

export const toggleRememberMe = () => async (dispatch) => {
    try {
      const isRemembered = await AsyncStorage.getItem('fcmToken')
      if (isRemembered === 'SAVED') {
        await AsyncStorage.removeItem('fcmToken')
        return dispatch({
          type: LOGIN_REMEMBER_ME,
          payload: false
        })
      }
      await AsyncStorage.setItem('fcmToken', 'SAVED')
      return dispatch({
        type: LOGIN_REMEMBER_ME,
        payload: true
      })
    } catch (e) {
      return null
    }
  }

  
export const logoutUser = () => {
    return (dispatch) => {
        dispatch({
            type: LOGOUT
        });
    }
}

export const loginRememberSuccess = (user) => {
    return (dispatch) => {

        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: user
        })
    }
}

export const login = (email, password) => {
    return (dispatch) => {

        dispatch({
            type: LOGIN
        });

        axios.post('https://adisyon.crm2c.gen.tr' + '/api/Auth/login', {
            email,password,
        })
            .then(user => {
                if (user.data == "") {
                    console.log("---------user------------");
                    console.log(email,password);
                    Alert.alert("Mesaj!", "Girdiğiniz bilgiler hatalı");
                    loginUserFailed(dispatch);
                }
                else {
                    loginUserSuccess(dispatch, user);
                    console.log("---------user------------> Giriş yapıldı.");
                    console.log(user);
                }
            })
            .catch(function (error) {
                Alert.alert("Giriş yapılamadı!", error.message);
                loginUserFailed(dispatch);
                console.log('Login hatası: ' + error.message);
                // ADD THIS THROW error
                //throw error;
            });
    }
};

const loginUserSuccess = async (dispatch, user) => {
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: user.data
        })
        
        console.log("Giriş yapıldı!", "Başarılı bir şekilde giriş yapıldı.", user.data);
        //Actions.main({ type: ActionConst.RESET });
        Actions.Anasayfa()
}

const loginUserFailed = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAILED
    })
}