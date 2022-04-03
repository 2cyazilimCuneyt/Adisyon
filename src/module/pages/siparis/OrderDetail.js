import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import * as actions from '../../../actions';
import { connect } from 'react-redux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class OrderDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.banner}>
                    <View style={styles.bannerContainer}>
                        <TouchableOpacity onPress={() => Actions.drawerOpen()}>
                            <Text>Menü</Text>
                        </TouchableOpacity>
                        <Text>Yeni Sipariş / Masa Numarası </Text>
                    </View>
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
})

const mapToStateProps = state => {
    console.log('state-------------------->',state)
    return {
        orderDetails:state.orderDetail.orderDetails
    }
}

export default connect(mapToStateProps, actions)(OrderDetail);