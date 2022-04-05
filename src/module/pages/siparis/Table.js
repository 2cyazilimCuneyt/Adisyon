import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, Button, Dimensions,FlatList, ScrollView, Modal } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {getRoomList, getTableList} from '../../../actions';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


class Table extends Component {

    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
            name:""
        }
    }

    UNSAFE_componentWillMount(){
        this.props.getRoomList();
        console.log('romssss 1')
    }

    onPressed = (roomId) =>{
        this.props.getTableList(roomId);
    }
    render() {
        const {rooms,tables} = this.props;
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
                     
                     
                        <FlatList
                                data={rooms}
                                numColumns={12}
                                renderItem={({item, index}) => (
                                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:10,}}>
                                        <TouchableOpacity style={styles.roomBox} onPress={() => this.onPressed(item.roomId)} >
                                            <Text style={styles.roomText}> {item.name} </Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                                keyExtractor={(item) => item.roomId}
                                style={{marginHorizontal:23}}
                            />
                       
                    <FlatList
                        data={tables}
                        columnWrapperStyle={{justifyContent: 'space-between',width:width*0.8}}
                        numColumns={3}
                        renderItem={({item, index}) => (
                            
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:10}}>
                                <TouchableOpacity style={styles.siparisBox} onPress={() => Actions.Menus()}>
                                    <Text style={styles.siparisText}> {item.name} </Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        keyExtractor={(item) => item.tableId}
                    />
                      
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
    roomBox:{
        width:width*0.4,
        height:height*0.05,
        backgroundColor:'#f5f5f5',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:5,
        borderColor:'#ff554a',
        borderBottomWidth:1
    },
    roomText:{
        fontSize:15,
        fontWeight:'600',
        color:'#707070',
        letterSpacing:1
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

const mapToStateProps = state => {
    console.log('tablesssssssss', state.table.tables);
    return {
        rooms: state.room.rooms,
        tables: state.table.tables
    }
}

export default  connect(mapToStateProps, {getRoomList, getTableList})(Table);