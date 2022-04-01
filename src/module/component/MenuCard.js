import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const MenuCard = (props) => {
    return (
        <View style={styles.cardContainer}>
            {props.children}
        </View>
    )
}
const styles = StyleSheet.create({
    cardContainer:{
        width: width*0.3,
        height: height*0.05,
        backgroundColor:'#fff',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        borderColor: '#ff554a',
        borderWidth:1,
        marginHorizontal:10,
        marginVertical:15
    }
})

export { MenuCard };