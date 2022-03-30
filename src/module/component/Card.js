import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Card = (props) => {
    return (
        <View style={styles.cardContainer}>
            {props.children}
        </View>
    )
}
const styles = StyleSheet.create({
    cardContainer:{
        width: width*0.4,
        height: height*0.14,
        backgroundColor:'#fff',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    }
})

export { Card };