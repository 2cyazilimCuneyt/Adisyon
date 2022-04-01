import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { MenuCard } from './MenuCard';
import * as actions from '../../actions';
import { connect } from  'react-redux';

class MenuItem extends Component {

    onPressed(){
        const {menu, selected} = this.props;

        selected ? this.props.deselectMenu() : this.props.selectMenu(menu)
    }
    
    render() {
        const {menu, selected,} = this.props;
        
        const menusProduct = selected ? (
            <View>
                <Text>{menu.name}</Text>
            </View>
        ) : null;

        return (
            <TouchableOpacity onPress={this.onPressed.bind(this)}>
                <MenuCard>
                    <Text>{menu.name}</Text>
                </MenuCard>
                {menusProduct}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({})

const mapStateToProps = (state, props) => {
    const selected = state.selectedMenu && state.selectedMenu.menuId === props.menu.menuId;
    return {
        selected,
    }
}

export default connect(mapStateToProps, actions)(MenuItem);