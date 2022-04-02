import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Router, Scene, Drawer, Stack } from 'react-native-router-flux';

import BosSayfa from '../pages/BosSayfa';
import Anasayfa from '../pages/anasayfa/Anasayfa';
import LoginForm from '../pages/login/LoginForm';
import Menu from '../pages/menu/Menu';
import Mutfak from '../pages/mutfak/Mutfak';
import Siparis from '../pages/siparis/Siparis';
import SiparisMenu from '../pages/siparis/SiparisMenu';
import ProductItem from '../component/ProductItem';

export default class DrawerNavigator extends Component {
    render() {
        return (
            <Router>
                <Stack key="root" hideNavBar initial>
                    <Scene key="main" hideNavBar>  
                        <Drawer key="drawer" contentComponent={Menu} drawerPosition='left' drawerWidth={'80%'} initial>
                            <Scene key="LoginForm" component={LoginForm} hideNavBar/>
                            {/*  <Scene key="BosSayfa" component={BosSayfa} hideNavBar/> */}
                            <Scene key="Anasayfa" component={Anasayfa} hideNavBar />
                            
                            <Scene key="Siparis" component={Siparis} hideNavBar />
                            <Scene key="SiparisMenu" component={SiparisMenu} hideNavBar />
                            <Scene key="Mutfak" component={Mutfak} hideNavBar />
                            <Scene key="ProductItem" component={ProductItem} hideNavBar />
                        </Drawer>
                    </Scene>
                </Stack>
            </Router>
        )
    }
}

const styles = StyleSheet.create({})
