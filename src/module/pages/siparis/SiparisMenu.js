import _ from 'lodash';
import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, ScrollView, Dimensions , FlatList, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';
import { getMenuList } from '../../../actions';
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import MenuItem from '../../component/MenuItem';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class SiparisMenu extends Component {
   UNSAFE_componentWillMount(){
        this.props.getMenuList();
        console.log('1');
   }

    renderItem ({item}) {
        
        return (
            <MenuItem menu = {item} />
            
        )
    }

    render() {
        const {menus} = this.props;
        console.log("menusYYYYYYYYYYYYYYyyyyyyyyyyy",menus);
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
                <FlatList
                    data={menus}
                    renderItem={this.renderItem}
                    keyExtractor={(item)=> item.menuId}
                />
                <Button onPress={()=>console.log('menus--------------->', this.props)} title="tıkla" ></Button>
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
})

const mapStateToProps = state => {
   
     return{
        menus:state.menu.menus
     }
};

export default connect(mapStateToProps, { getMenuList })(SiparisMenu);

