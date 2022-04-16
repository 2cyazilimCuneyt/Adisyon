import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

class Cart extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

const mapToStateProps = state => {
    console.log('Cart State------------>', state);
    return {}
}

export default connect(mapToStateProps, null)(Cart);