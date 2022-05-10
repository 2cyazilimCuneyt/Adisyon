/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity, Platform, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import {Actions} from 'react-native-router-flux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Cart extends Component {
    renderItem = (item) => (
        <View style={styles.cartContainer}>
            <View style={styles.cartBody}>
                <View style={styles.cartBox}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:width * 0.15}} >
                        <TouchableOpacity>
                            <Text>-</Text>
                        </TouchableOpacity>
                        <Text>0</Text>
                        <TouchableOpacity>
                            <Text>+</Text>
                        </TouchableOpacity>
                    </View>
                    <Text>Tam - name</Text>
                    <Text>₺ 12.00</Text>
                </View>
                <View style={styles.cartRow} />
            </View>
            <View style={styles.cartFooter}>
                <View>
                    <Text>Toplam Tutar</Text>
                    <Text>₺ </Text>
                </View>
                <View>
                    <Text>İndirim</Text>
                    <Text>₺ 0.00</Text>
                </View>
                <View>
                    <Text>Tahsil Edilen</Text>
                    <Text>₺ 0.00</Text>
                </View>
                <View>
                    <Text>Kalan</Text>
                    <Text>₺ </Text>
                </View>
            </View>
        </View>
    );
    render() {
        const {orderList} = this.props;
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
                <ScrollView>
                    <FlatList
                        data={orderList}
                        renderItem={this.renderItem()}
                        keyExtractor={(item) => item.orderListId}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
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
        width:width * 0.9,
    },
    cartContainer:{
        flex:1,
        height:height * 0.9,
    },
    cartBody:{
        flex:2,
    },
    cartBox:{
        width:width * 0.9,
        height: height * 0.06,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    cartRow:{
        width:width * 0.9,
        backgroundColor:'#424242',
        height:1,
    },
    cartFooter:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width: width * 0.9,
        height:height * 0.07,
    }
});

const mapToStateProps = state => {
    console.log('Cart State------------>', state.order.activeOrder);
    return {
        orderList: state.order.activeOrder,
        activeTables: state.table.activeTable,
    };
};

export default connect(mapToStateProps, actions)(Cart);
