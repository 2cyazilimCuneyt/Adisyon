import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class CustomerPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/background.png')} style={styles.background}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../../assets/terrace.png')} style={styles.logo}/>
                        <TouchableOpacity style={styles.girisButton} onPress={()=> Actions.LoginForm()}>
                            <Text style={styles.girisText}>Giriş Yap</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.waiterContainer}>
                        <TouchableOpacity style={styles.waiterButton} onPress={()=> Actions.SmsOnay()}>
                            <Image source={require('../../assets/images/waiter.png')} style={styles.icon} />
                            <Text style={styles.waiterText}>Garson Çağır</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
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
    background: {
        width: width,
        height: height,
        justifyContent:'space-between',
    },
    logoContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:height*0.3
    },
    logo:{
        width: width*0.85,
        height:height*0.12,
    },
    girisButton:{
        marginTop:height*0.03
    },
    girisText:{
        fontSize:18,
        color:'#3ec978',
        fontWeight:'600'
    },
    waiterContainer:{
        marginBottom: height*0.06,
        alignItems:'flex-end',
        marginRight: width*0.10
    },
    waiterButton:{
        backgroundColor: '#3ec978',
        width: width*0.32,
        height: width*0.32,
        borderRadius:width*0.16,
        justifyContent:'center',
        alignItems:'center',  
    },
    icon:{
        width: width*0.12,
        height: width*0.12,
        marginBottom:8
    },
    waiterText:{
        fontSize: 16,
        color:'#fff',
        fontWeight:'700',
    }
})
