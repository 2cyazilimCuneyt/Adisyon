/* eslint-disable prettier/prettier */
import _ from 'lodash';
import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, Dimensions , FlatList, TouchableOpacity, Platform } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import {Actions} from 'react-native-router-flux';
import Input from '../../component/Input';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Menus extends Component {
   UNSAFE_componentWillMount(){
    this.props.getMenuList();
   }

   onPressed = (menuId) =>{
        const selectedMenu = this.props.menus.filter( item => {
            return item.parentId ===  menuId;

         });

         if (selectedMenu.length === 0) {
            this.props.getProductList(menuId);
            Actions.Product();
         }
    }
    render() {
        const {menus} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.banner}>
                    <View style={styles.bannerContainer}>
                        <View style={{width:width*0.15, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <TouchableOpacity onPress={() => Actions.Table()}>
                                <Image source={require('../../assets/images/left.png')} style={{width:width*0.07, height:width*0.07}}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Actions.drawerOpen()}>
                                <Image source={require('../../assets/images/menu.png')} style={{width:width*0.07, height:width*0.07}}/>
                            </TouchableOpacity>
                        </View>
                        <Text style={{color:'#fff', fontSize:16, fontWeight: '600'}}>Yeni Sipariş / {this.props.activeTables.name} </Text>
                    </View>
                </View>
                <View>
                    <Input full placeholder="Menüde Arama Yapın..."/>
                </View>
                <FlatList
                    data={menus}
                    renderItem={({item, index}) =>
                        (<View>
                            <TouchableOpacity style={styles.cardContainer} onPress={()=>this.onPressed(item.menuId)}>
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                        </View>)}
                    numColumns="2"
                    keyExtractor={(item)=> item.menuId}
                    style={styles.menuContainerBox}
                />
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
        backgroundColor:'#3ec978',
        height:100,
        paddingTop:Platform.OS === 'ios' ? 50 : 20,
        alignItems:'center',
        marginBottom:25
    },
    bannerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:width*0.9,
    },
    cardContainer:{
        width: width*0.4,
        height: height*0.07,
        backgroundColor:'#fff',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        borderColor: '#3ec978',
        borderWidth:1,
        marginHorizontal:10,
        marginVertical:10,
    },
});

const mapStateToProps = state => {
     return {
        menus:state.menu.menus,
        products: state.product.products,
        activeTables: state.table.activeTable,
     };
};

export default connect(mapStateToProps, actions)(Menus);

