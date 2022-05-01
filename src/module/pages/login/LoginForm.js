import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, TextInput, Button, Alert, TouchableOpacity, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, login, initRememberMe, toggleRememberMe } from '../../../actions';
import AsyncStorage from '@react-native-community/async-storage';
import CheckBox from '@react-native-community/checkbox';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          check: false,
          email: '',
          password:'',
          loading:false,
        };
      }

    UNSAFE_componentWillMount() {
        this.props.initRememberMe()
    }

      GirisYap = async () => {
        //Keyboard.dismiss();
        if (this.props.email.length > 0 || this.props.password.length > 0) {
          console.log(
            'log: ' + this.props.email,
            this.props.password,
            await AsyncStorage.getItem('fcmToken'),
            this.state.check,
          );
          this.props.login(
            this.props.email,
            this.props.password,
            await AsyncStorage.getItem('fcmToken'),
            this.state.check,
          );
        } else {
          Alert.alert('Uyarı', 'Lütfen bilgileri eksiksiz doldurunuz');
        }
      };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.banner}>
                    <Image source={require('../../assets/terrace.png')} style={styles.logo} />
                </View>
                <View style={styles.loginFormContainer}>
                    <View style={styles.loginForm}>
                        <TextInput style={styles.formInput} onChangeText={email=> this.props.emailChanged(email)}
                            value={this.props.email} placeholder="Kullanıcı Adınız" placeholderTextColor='#9d9d9d' />
                        <TextInput style={styles.formInput} onChangeText={password=> this.props.passwordChanged(password)}
                            value={this.props.password} placeholder="Şifreniz" placeholderTextColor='#9d9d9d' />
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={this.props.isRemembered}
                            onValueChange={() => this.props.toggleRememberMe()}
                            style={styles.checkbox}
                        />
                        <Text style={styles.label}>Beni Hatırla</Text>
                    </View>
                    <Button onPress={()=> this.GirisYap()} style={styles.loginButton} title="Giriş Yap" color='#3ec978' ></Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    banner:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    bannerText:{
        fontSize:25,
        color:'#ff554a',
        fontWeight:'600',
        letterSpacing:1
    },
    loginFormContainer:{
        flex:2,
        alignItems:'center',
    },
    loginForm:{
        width:width*0.8,
        alignItems:'center',
        marginTop:50
    },
    formInput:{
        width:width*0.7,
        height:45,
        backgroundColor:'#f5f5f5',
        borderRadius:5,
        paddingHorizontal:20,
        marginBottom:20,
    },
    loginButton:{
        width:width*0.7,
        height:50,
        borderRadius:5,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: "center",
        height:20
      },
      label: {
        margin: 2,
      },
      logo: {
        width: width*0.80,
        height:height*0.12,
      }
})
const mapStateToProps = state => {
    const { email, password, loading, error} = state.auth;
    return {
        email: 'cuneyt@2cyazilim.net',
        password: 'c4c14c41Xx*', 
        loading, error, 
    }
}

export default connect(mapStateToProps, {emailChanged,passwordChanged, login, initRememberMe, toggleRememberMe})(LoginForm);