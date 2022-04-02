import _ from 'lodash';
import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, ScrollView, Dimensions , FlatList, TouchableOpacity, Button } from 'react-native';
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

         if (selectedMenu.length == 0) {
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
                        <TouchableOpacity onPress={() => Actions.drawerOpen()}>
                            <Text>Menü</Text>
                        </TouchableOpacity>
                        <Text>Yeni Sipariş / Masa Numarası </Text>
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
    cardContainer:{
        width: width*0.4,
        height: height*0.07,
        backgroundColor:'#fff',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        borderColor: '#ff554a',
        borderWidth:1,
        marginHorizontal:10,
        marginVertical:10
    }
})

const mapStateToProps = state => {
    console.log('state.product.products',state.product.products);
     return{
        menus:state.menu.menus,
        products: state.product.products
     }
};

export default connect(mapStateToProps, actions)(Menus);

