import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { ProductCard } from './ProductCard';
import * as actions from '../../actions';
import { connect } from  'react-redux';

class ProductItem extends Component {
   
    render() {
        const {product} = this.props;
        console.log(this.props);
        return (
            <TouchableOpacity>
                <ProductCard>
                    <Text>{product.name}</Text>
                    <Text>{product.price}</Text>
                    <Text>{product.photo}</Text>
                </ProductCard>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({})

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, actions)(ProductItem);