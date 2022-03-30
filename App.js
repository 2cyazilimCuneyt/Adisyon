import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import DrawerNavigator from './src/module/navigation/DrawerNavigator';
// import firebase from 'firebase';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import AsyncStorage from '@react-native-community/async-storage';

class App extends Component {
  /* componentDidMount() {
    firebase.initializeApp (
      {
        apiKey: "AIzaSyAUj0Rn8qvmvDW2BztcCWgbEFc7dM96Hd8",
        authDomain: "adisyon-b56bd.firebaseapp.com",
        projectId: "adisyon-b56bd",
        storageBucket: "adisyon-b56bd.appspot.com",
        messagingSenderId: "865007782483",
        appId: "1:865007782483:web:f789cf85df2e5568f454a6",
        measurementId: "G-4TWJ25MF4K"
      }
    )
  } */

 /*  async getToken() {
    var fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log('fcmToken:   ' + fcmToken);
    if(!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        console.log("after fcmToken", fcmToken);
        await AsyncStorage.setItem('fcmToken', fcmToken);
      } else {
        console.log("again requestPermission");
      }
    } 
    console.log("before fcmToken", fcmToken);
    return fcmToken;
  } */

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <DrawerNavigator/>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({})

export default App;