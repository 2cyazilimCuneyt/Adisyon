/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
  Platform,
} from 'react-native';
import {ProductCard} from '../../component/ProductCard';
import * as actions from '../../../actions';
import {connect} from 'react-redux';
import Input from '../../component/Input';
import {Actions} from 'react-native-router-flux';
import ModalSelector from 'react-native-modal-selector';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textInputValue: '',
    };
  }
  addToOrderDetails = (product, count) => {
    let orderDetail = {
      orderDetailId: 0,
      orderId: this.props.activeOrders.orderId,
      productId: product.productId,
      productName: product.name,
      productPrice: product.price,
      portion: 'exercitation reprehenderit eu',
      count: count,
    };
    this.props.updateOrderDetailList(orderDetail, this.props.orderDetailList);
  };

  saveDetailList = () => {
    this.props.saveOrderDetailList(this.props.orderDetailList);
  };

  selectedCount = product => {
    try {
      let selected = this.props.orderDetailList.filter(item => {
        return item.productId === product.productId;
      });
      if (selected.length > 0) {
        return selected[0].count;
      }
    } catch {}
    return 0;
  };
  render() {
    const {products} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <View style={styles.bannerContainer}>
            <View
              style={{
                width: width * 0.15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={() => Actions.Menus()}>
                <Image
                  source={require('../../assets/images/left.png')}
                  style={{width: width * 0.07, height: width * 0.07}}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Actions.drawerOpen()}>
                <Image
                  source={require('../../assets/images/menu.png')}
                  style={{width: width * 0.07, height: width * 0.07}}
                />
              </TouchableOpacity>
            </View>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
              Yeni Sipariş / {this.props.activeTables.name}{' '}
            </Text>
          </View>
        </View>

        <View>
          <Input full placeholder="Menüde Arama Yapın..." />
        </View>
        {/* <ModalSelector
          data={menus}
          initValue="Menü Değiştirin!"
          onChange={option => {
            this.setState({textInputValue: option.name});
          }}
        /> */}
        <FlatList
          data={products}
          renderItem={({item, index}) => (
            <View>
              <ProductCard>
                <View
                  style={{
                    height: height * 0.15,
                    justifyContent: 'space-between',
                    marginHorizontal: 15,
                    paddingVertical: 15,
                  }}>
                  <Text style={styles.productTitle}>{item.name}</Text>
                  <Text style={styles.productSubTitle}>₺ {item.price}</Text>
                </View>
                <View style={styles.productButton}>
                  <TouchableOpacity
                    style={styles.counter}
                    onPress={() => this.addToOrderDetails(item, 1)}>
                    <Text>+</Text>
                  </TouchableOpacity>
                  <Text style={styles.counterText}>
                    {this.selectedCount(item)}
                  </Text>
                  <TouchableOpacity
                    style={styles.counter}
                    onPress={() => this.addToOrderDetails(item, -1)}>
                    <Text>-</Text>
                  </TouchableOpacity>
                </View>
              </ProductCard>
            </View>
          )}
          numColumns="2"
          keyExtractor={item => item.productId}
          style={styles.menuContainerBox}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonBox}
            onPress={() => this.saveDetailList()}>
            <Image source={require('../../assets/onay.png')} />
            <Text style={{fontSize: 19, color: '#fff', fontWeight: '600'}}>
              Kaydet
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Actions.Cart(this.props.orderDetailList)}
            style={styles.buttonBox1}>
            <View
              style={{
                borderColor: '#fff',
                borderWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
                height: 30,
                width: 30,
                borderRadius: 15,
              }}>
              <Text style={{fontSize: 16, color: '#fff', fontWeight: '600'}}>
                {this.props.orderDetailList.length}
              </Text>
            </View>
            <Text style={{fontSize: 19, color: '#fff', fontWeight: '600'}}>
              Sipariş Detay
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  banner: {
    width: width,
    backgroundColor: '#3ec978',
    height: 100,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    alignItems: 'center',
    marginBottom: 25,
  },
  bannerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.9,
  },
  productTitle: {
    color: '#5a5a5a',
    fontSize: 16,
    fontWeight: '500',
    width: width * 0.2,
  },
  productSubTitle: {
    color: '#828282',
    fontSize: 15,
  },
  productButton: {
    backgroundColor: '#C4C4C4',
    height: height * 0.15,
    width: width * 0.1,
    borderBottomEndRadius: 10,
    borderTopEndRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  counter: {
    backgroundColor: '#fff',
    height: 20,
    width: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height * 0.13,
  },
  buttonBox: {
    width: width * 0.33,
    height: height * 0.06,
    backgroundColor: '#3ec978',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonBox1: {
    width: width * 0.5,
    height: height * 0.06,
    backgroundColor: '#3ec978',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 15,
  },
});

const mapStateToProps = state => {
  return {
    products: state.product.products,
    activeTables: state.table.activeTable,
    activeOrders: state.order.activeOrder,
    orderDetailList: state.orderDetail.orderDetailList,
  };
};

export default connect(mapStateToProps, actions)(Product);
