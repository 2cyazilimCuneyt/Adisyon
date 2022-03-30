import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Card } from './Card';
import * as actions from '../../actions';
import { connect } from  'react-redux';

class MenuItem extends Component {
    
    render() {
        const {menu} = this.props;
        console.log(this.props);
        return (
            <TouchableOpacity onPress={()=> this.props.selectMenu(menu)}>
                <Card>
                    <Text>{menu.name}</Text>
                </Card>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({})

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, actions)(MenuItem);