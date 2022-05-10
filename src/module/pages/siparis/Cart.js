/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity, Platform } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import {Actions} from 'react-native-router-flux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Cart extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.banner}>
                    <View style={styles.bannerContainer}>
                        <View style={{width:width*0.15, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <TouchableOpacity onPress={() => Actions.Product()}>
                                <Image source={require('../../assets/images/left.png')} style={{width:width*0.07, height:width*0.07}}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Actions.drawerOpen()}>
                                <Image source={require('../../assets/images/menu.png')} style={{width:width*0.07, height:width*0.07}}/>
                            </TouchableOpacity>
                        </View>
                        <Text style={{color:'#fff', fontSize:15}}>Yeni Sipariş / {this.props.activeTables.name} </Text>
                    </View>
                </View>
            </View>
        );
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
        backgroundColor:'#3ec978',
        height:100,
        paddingTop:Platform.OS === 'ios' ? 50 : 20,
        alignItems:'center',
        marginBottom:25,
    },
    bannerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:width * 0.85,
    },
});

const mapToStateProps = state => {
    console.log('Cart State------------>', state);
    return {
        activeTables: state.table.activeTable,
    };
};

export default connect(mapToStateProps, actions)(Cart);