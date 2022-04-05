import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, FlatList, Dimensions, Image } from 'react-native';
import * as actions from '../../actions';
import { connect } from  'react-redux';
import Input from './Input';
import {Actions} from 'react-native-router-flux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class TableItem extends Component {
   
    render() {
        const {tables} = this.props;
        return (
            <View style={styles.container}>
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
                    keyExtractor={(item) => item.tableId}/>
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
        alignItems:'center',
        marginBottom:25
    },
    bannerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:width*0.85
    },
    productTitle:{
        color: '#5a5a5a',
        fontSize:17,
        fontWeight:'500'
    },
    productSubTitle:{
        color: '#828282',
        fontSize:15
    },
    productButton:{
        backgroundColor: '#C4C4C4',
        height:height*0.15,
        width:width*0.13,
        borderBottomEndRadius:10,
        borderTopEndRadius:10,
        alignItems:'center',
        justifyContent:'space-around',
    },
    counter:{
        backgroundColor:'#fff',
        height:20,
        width:20,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    counterText:{
        fontSize:20
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:width,
        height:height*0.13
    },
    buttonBox:{
        width:width*0.33,
        height:height*0.06,
        backgroundColor:'#FF554A',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        borderRadius:10
    },
    buttonBox1:{
        width:width*0.5,
        height:height*0.06,
        backgroundColor:'#FF554A',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        borderRadius:10,
        marginLeft:15
    }
})

const mapStateToProps = state => {
    console.log('tables ------------------->', state.table.tables)
    return {
        tables: state.table.tables
    }
}

export default connect(mapStateToProps, actions)(TableItem);