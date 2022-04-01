import _ from 'lodash';
import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, ScrollView, Dimensions , FlatList, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import MenuItem from '../../component/MenuItem';
import Input from '../../component/Input';
import ProductItem from '../../component/ProductItem';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class SiparisMenu extends Component {
   UNSAFE_componentWillMount(){
        this.props.getMenuList();
        this.props.getProductList();
        console.log('1');
   }

    renderMenuItem ({item}) {
        
        return (
            <MenuItem menu = {item} />
        )
    }

    renderProductItem ({item}) {
        
        return (
            <ProductItem product = {item} />
        )
    }

    render() {
        const {menus, products} = this.props;

        

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
                <View style={styles.menuContainer}>
                    <FlatList
                        data={menus}
                        renderItem={this.renderMenuItem}
                        numColumns="12"
                        keyExtractor={(item)=> item.menuId}
                        style={styles.menuContainerBox}
                    />
                </View>
                <View style={styles.productContainer}>
                    <View>
                        <Input full placeholder="Menüde Arama Yapın..."/>
                    </View>

                    
                    <FlatList
                        data={products}
                        renderItem={this.renderProductItem}
                        numColumns="2"
                        keyExtractor={(item)=> item.productId}
                        style={styles.productContainerBox}
                    />
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
        alignItems:'center'
    },
    bannerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:width*0.85
    },
    menuContainer:{
        flex:1,
    },
    productContainer:{
        flex:9
    }
})

const mapStateToProps = state => {
   console.log('productsssssssssssssssssssss', state.product )
     return{
        menus:state.menu.menus,
        products:state.product,
     }
};

export default connect(mapStateToProps, actions)(SiparisMenu);

