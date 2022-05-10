import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ProductCard = props => {
  return <View style={styles.cardContainer}>{props.children}</View>;
};
const styles = StyleSheet.create({
  cardContainer: {
    width: width * 0.38,
    height: height * 0.15,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export {ProductCard};
