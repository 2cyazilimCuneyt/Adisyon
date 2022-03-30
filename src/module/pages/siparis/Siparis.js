import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, Button, Dimensions } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import SiparisMenu from './SiparisMenu';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const data = [
    {name: 'Masa 1', key:'1'},
    {name: 'Masa 2', key:'2'},
    {name: 'Masa 3', key:'3'},
    {name: 'Masa 4', key:'4'},
    {name: 'Masa 5', key:'5'},
    {name: 'Masa 6', key:'6'},
    {name: 'Masa 7', key:'7'},
    {name: 'Masa 8', key:'8'},
    {name: 'Masa 9', key:'9'},
    {name: 'Masa 10', key:'10'},
];

class Siparis extends Component {
    MasaSec(x){
        switch (x) {
            case '1':
                Actions.SiparisMenu(x);
                break;
            case '2':
                Actions.SiparisMenu(x);
                break;
            case '3':
                Actions.SiparisMenu(x);
                break;
            case '4':
                Actions.SiparisMenu(x);
                break;
            case '5':
                Actions.SiparisMenu(x);
                break;
            case '6':
                Actions.SiparisMenu(x);
                break;
            case '7':
                Actions.SiparisMenu(x);
                break;
            case '8':
                Actions.SiparisMenu(x);
                break;
            case '9':
                Actions.SiparisMenu(x);
                break;
            case '10':
                Actions.SiparisMenu(x);
                break;
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.banner}>
                    <View style={styles.bannerContainer}>
                        <TouchableOpacity onPress={() => Actions.drawerOpen()}>
                            <Text>Menü</Text>
                        </TouchableOpacity>
                        <Text>Sipariş / </Text>
                    </View>
                </View>
                <ScrollView style={{width:width, marginVertical:20}}>
                    <View style={styles.siparisContainer}>
                        <View>
                            <Text>Salon</Text>
                        </View>

                        <FlatList
                         data={data}
                         columnWrapperStyle={{justifyContent: 'space-between',width:width*0.8}}
                         numColumns={3}
                         renderItem={({item, index}) => (
                             <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:10}}>
                                 <TouchableOpacity style={styles.siparisBox} onPress={() => this.MasaSec(item.key)}>
                                     <Text style={styles.siparisText}> {item.name} </Text>
                                 </TouchableOpacity>
                             </View>
                         )}
                         keyExtractor={(item) => item.key}/>

                         <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:width*0.8, marginVertical:30}}>
                             <View style={{flexDirection:'row', alignItems:'center'}}>
                                 <View style={{width:12, height:12, backgroundColor:'#5CA026'}}></View>
                                 <Text style={{fontSize:10, color:'#5CA026', marginLeft:5}}>Sipariş Masada</Text>
                             </View>
                             <View style={{flexDirection:'row', alignItems:'center'}}>
                                 <View style={{width:12, height:12, backgroundColor:'#FF554A'}}></View>
                                 <Text style={{fontSize:10, color:'#FF554A', marginLeft:5}}>Sipariş Bekleniyor</Text>
                             </View>
                             <View style={{flexDirection:'row', alignItems:'center'}}>
                                 <View style={{width:12, height:12, backgroundColor:'#9d9d9d'}}></View>
                                 <Text style={{fontSize:10, color:'#9d9d9d', marginLeft:5}}>Masa Boş</Text>
                             </View>
                         </View>
                    </View>
                </ScrollView>
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
        width:width,
        backgroundColor:'#ff554a',
        height:100,
        paddingTop:Platform.OS === 'ios' ? 50 : 20,
        alignItems:'center'
    },
    bannerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:width*0.85
    },
    siparisContainer:{
        alignItems:'center'
    },
    siparisBox:{
        width:width*0.25,
        height:height*0.09,
        backgroundColor:'#f5f5f5',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    siparisText:{
        fontSize:17,
        fontWeight:'700',
        color:'#9d9d9d'
    }
})


export default Siparis;