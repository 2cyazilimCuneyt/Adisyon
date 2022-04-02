import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Router, Scene, Drawer, Stack } from 'react-native-router-flux';

import BosSayfa from '../pages/BosSayfa';
import Anasayfa from '../pages/anasayfa/Anasayfa';
import LoginForm from '../pages/login/LoginForm';
import Navigation from '../pages/menu/Navigation';
import Mutfak from '../pages/mutfak/Mutfak';
import Table from '../pages/siparis/Table';
import Menus from '../pages/siparis/Menus';
import Product from '../pages/siparis/Product';
import Order from '../pages/siparis/Order';
import OrderDetail from '../pages/siparis/OrderDetail';

export default class DrawerNavigator extends Component {
    render() {
        return (
            <Router>
                <Stack key="root" hideNavBar initial>
                    <Scene key="main" hideNavBar>  
                        <Drawer key="drawer" contentComponent={Navigation} drawerPosition='left' drawerWidth={'80%'} initial>
                            <Scene key="LoginForm" component={LoginForm} hideNavBar/>
                            {/*  <Scene key="BosSayfa" component={BosSayfa} hideNavBar/> */}
                            <Scene key="Anasayfa" component={Anasayfa} hideNavBar />
                            <Scene key="Table" component={Table} hideNavBar />
                            <Scene key="Menus" component={Menus} hideNavBar />
                            <Scene key="Mutfak" component={Mutfak} hideNavBar />
                            <Scene key="Product" component={Product} hideNavBar />
                            <Scene key="Order" component={Order} hideNavBar />
                            <Scene key="OrderDetail" component={OrderDetail} hideNavBar />
                        </Drawer>
                    </Scene>
                </Stack>
            </Router>
        )
    }
}

const styles = StyleSheet.create({})
