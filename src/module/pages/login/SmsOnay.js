import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput, Alert } from 'react-native';
import {Actions} from 'react-native-router-flux';
import Input from '../../component/Input';
import Overlay from 'react-native-modal-overlay';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class SmsOnay extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/background.png')} style={styles.background}>
                {/* <Overlay
                    visible={this.state.modalVisible1}
                    onClose={this.onClose2}
                    closeOnTouchOutside
                    containerStyle={{backgroundColor:'rgba(255,174,0,0.7)'}}
                    animationType="fadeInUp"
                    style={{backgroundColor: 'rgba(255,174,0,0.7)'}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{textAlign: 'center'}}>
                        {this.state.yildizliTelefon} telefon numaranıza gönderilen
                        onay kodunu giriniz,
                        </Text>

                        <View style={{borderColor: '#5b3774'}}>
                        <View
                            style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            }}>
                            <TextInput
                            placeholder="Onay kodu"
                            placeholderTextColor="gray"
                            onChangeText={this.onaykoduChanged.bind(this)}
                            full
                            style={{marginTop: 10, width: '90%', height: 40}}
                            />
                        </View>
                        </View>
                        <View style={{marginBottom: 30, alignItems: 'center'}}>
                        <TouchableOpacity
                            loading={this.state.loading}
                            onPress={() => this.SmsOnayla()}
                            style={{
                            width: 200,
                            height: 30,
                            borderRadius: 50,
                            marginTop: 25,
                            backgroundColor: '#fe0002',
                            }}>
                            <Text
                            style={{
                                color: '#fff',
                                fontSize: 15,
                                textAlign: 'center',
                                fontWeight: '700',
                                marginVertical: 5,
                            }}>
                            DEVAM
                            </Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </Overlay> */}
                    <View style={styles.logoContainer}>
                        <Image source={require('../../assets/terrace.png')} style={styles.logo}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>DOĞRULAMA KODU AL</Text>
                            <Text style={styles.subTitle}>Lütfen garson çağırabilmek için cep telefonunuzu onaylayın.</Text>
                        </View>
                        <Input style={styles.input} placeholder="0 ( 555 ) 555 55 55" onChangeText={this.telNoChange.bind(this)}
                                value={this.state.cepOnayKodu}/>
                        <TouchableOpacity style={styles.girisButton} /* onPress={() => this.FormKontrol()} */>
                            <Text style={styles.girisText}>ONAY KODU GÖNDER</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.waiterContainer}>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/leftArrow.png')} style={styles.icon} />
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
    marginTop:height*0.15
},
logo:{
    width: width*0.65,
    height:height*0.10,
},
titleContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:height*0.06,
    width: width*0.75
},
title:{
    color:'#3E3E40',
    fontSize:20, 
    fontWeight:'700',
    marginBottom:10
},
subTitle:{
    textAlign:'center',
    color:'#3E3E40',
    fontSize:13
},
inputContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:height*0.12
},
input:{
    backgroundColor:'#fff'
},
girisButton:{
    marginTop:height*0.01,
    backgroundColor:'#3ec978',
    width:width*0.7,
    height:36,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
},
girisText:{
    fontSize:15,
    color:'#fff',
    fontWeight:'600'
},
waiterContainer:{
    marginBottom: height*0.04,
    alignItems:'flex-start',
    marginLeft: width*0.10
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
    width: width*0.10,
    height: width*0.10,
    marginBottom:8
},
waiterText:{
    fontSize: 16,
    color:'#fff',
    fontWeight:'700',
}
})

export default SmsOnay;