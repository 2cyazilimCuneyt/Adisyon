import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions, TextInput } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Input extends Component {
    render() {
        const {label, rightLabel, full, email, phone, number, password, style, numeric, ...props } = this.props;
        const inputStyles = [
            styles.input,
            full && styles.full,
            style,
        ];

        const inputType = email
            ? 'email-address' : number
                ? 'numeric' : phone
                    ? 'phone-pad' : 'default';
        return (
            <View>
                <TextInput
                    style={inputStyles}
                    secureTextEntry={password}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType={inputType}
                    placeholderTextColor="#535353"
                    {...props}
                />
                <View style={styles.labelContainer}>
                    {rightLabel}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        fontWeight:'500',
        fontSize:12,
        width:width*0.7,
        height:45,
        backgroundColor:'#f5f5f5',
        borderRadius:5,
        paddingHorizontal:20,
        marginBottom:20,
    },
    labelContainer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginBottom:0
    },
    full:{
        width: width*0.75,
    }
})