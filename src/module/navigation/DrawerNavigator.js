import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Router, Scene, Drawer, Stack } from 'react-native-router-flux';

import Anasayfa from '../pages/anasayfa/Anasayfa';
import LoginForm from '../pages/login/LoginForm';
import Navigation from '../pages/menu/Navigation';
import Mutfak from '../pages/mutfak/Mutfak';
import Table from '../pages/siparis/Table';
import Menus from '../pages/siparis/Menus';
import Product from '../pages/siparis/Product';
import Cart from '../pages/siparis/Cart';
import CartDetails from '../pages/siparis/CartDetails';

export default class DrawerNavigator extends Component {
    render() {
        return (
            <Router>
                <Stack key="root" hideNavBar initial>
                    <Scene key="main" hideNavBar>  
                        <Drawer key="drawer" contentComponent={Navigation} drawerPosition='left' drawerWidth={'80%'} initial>
                            <Scene key="LoginForm" component={LoginForm} hideNavBar/>
                            <Scene key="Anasayfa" component={Anasayfa} hideNavBar />
                            <Scene key="Table" component={Table} hideNavBar />
                            <Scene key="Menus" component={Menus} hideNavBar />
                            <Scene key="Mutfak" component={Mutfak} hideNavBar />
                            <Scene key="Product" component={Product} hideNavBar />
                            <Scene key="Cart" component={Cart} hideNavBar />
                            <Scene key="CartDetails" component={CartDetails} hideNavBar />
                        </Drawer>
                    </Scene>
                </Stack>
            </Router>
        )
    }
}

const styles = StyleSheet.create({})
