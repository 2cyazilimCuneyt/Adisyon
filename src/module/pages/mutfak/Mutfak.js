import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, Button, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Mutfak extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
