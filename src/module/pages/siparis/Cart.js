import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../../actions';
import {Actions} from 'react-native-router-flux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Cart extends Component {
  UNSAFE_componentWillMount() {
    this.props.activeTable;
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
    this.props.updateOrderDetailList(
      orderDetail,
      this.props.activeOrderDetailList,
    );
  };

  saveDetailList = () => {
    this.props.saveOrderDetailList(this.props.activeOrderDetailList);
  };

  tableClose = () => {
    let order = {
      orderId: this.props.activeOrders.orderId,
      tableId: this.props.activeOrders.tableId,
      date: new Date(),
      description: '',
      userId: 0,
      isClosed: true,
      isReady: true,
      totalPrice: this.total(),
      closeDate: new Date(),
    };

    this.props.updateOrderList(order);
    Actions.Table();
  };

  total = () => {
    let toplam = 0;
    if (this.props.activeOrderDetailList.length > 0) {
      this.props.activeOrderDetailList.forEach(element => {
        toplam = toplam + element.count * element.productPrice;
      });
    }
    return toplam;
  };

  selectedCount = product => {
    try {
      let selected = this.props.activeOrderDetailList.filter(item => {
        return item.productId === product.productId;
      });
      if (selected.length > 0) {
        return selected[0].count;
      }
    } catch {}
    return 0;
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <View style={styles.bannerContainer}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
              {this.props.activeTables.name}{' '}
            </Text>
            <TouchableOpacity
              style={styles.buttonBox1}
              onPress={() => Actions.Product()}>
              <Image
                source={require('../../assets/close.png')}
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cartContainer}>
          <FlatList
            data={this.props.activeOrderDetailList}
            renderItem={({item, index}) => (
              <View style={styles.cartBody}>
                <View style={styles.cartBox}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: width * 0.15,
                    }}>
                    <TouchableOpacity
                      onPress={() => this.addToOrderDetails(item, -1)}>
                      <Text>-</Text>
                    </TouchableOpacity>
                    <Text>{this.selectedCount(item)}</Text>
                    <TouchableOpacity
                      onPress={() => this.addToOrderDetails(item, 1)}>
                      <Text>+</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={{width: width * 0.5}}>{item.productName}</Text>
                  <Text>₺ {item.productPrice * item.count}</Text>
                </View>
              </View>
            )}
            keyExtractor={item => item.orderDetailId}
          />
        </View>
        <View style={styles.cartRow} />
        <View style={styles.cartFooter}>
          <View>
            <Text style={styles.footerText}>Toplam Tutar</Text>
            <Text>₺ {this.total()}</Text>
          </View>
          <View>
            <Text style={styles.footerText}>İndirim</Text>
            <Text>₺ 0.00</Text>
          </View>
          <View>
            <Text style={styles.footerText}>Tahsil Edilen</Text>
            <Text>₺ 0.00</Text>
          </View>
          <View>
            <Text style={styles.footerText}>Kalan</Text>
            <Text>₺ {this.total()}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonBox}
            onPress={() => this.saveDetailList()}>
            <Image source={require('../../assets/onay.png')} />
            <Text style={{fontSize: 18, color: '#fff', fontWeight: '600'}}>
              Kaydet
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBox}>
            <Image source={require('../../assets/print.png')} />
            <Text style={{fontSize: 18, color: '#fff', fontWeight: '600'}}>
              Yazdır
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBox}
            onPress={() => this.tableClose()}>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: '600'}}>
              Ödeme Yap
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
  cartContainer: {
    flex: 1,
    height: height * 0.9,
  },
  cartBody: {
    flex: 1,
  },
  cartBox: {
    width: width * 0.9,
    height: height * 0.06,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#ebebeb',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  cartRow: {
    width: width * 0.9,
    backgroundColor: '#424242',
    height: 1,
  },
  cartFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.9,
    height: height * 0.07,
    paddingLeft: 15,
    paddingRight: 15,
  },
  footerText: {
    fontSize: 11,
    fontWeight: '300',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: width,
    height: height * 0.13,
  },
  buttonBox: {
    width: width * 0.3,
    height: height * 0.05,
    backgroundColor: '#3ec978',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonBox1: {
    width: height * 0.04,
    height: height * 0.04,
    backgroundColor: '#3ec978',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});

const mapToStateProps = state => {
  return {
    orders: state.order.activeOrder,
    orderDetailList: state.orderDetail.orderDetailList,
    activeTables: state.table.activeTable,
    products: state.product.products,
    activeOrders: state.order.activeOrder,
    activeOrderDetailList: state.orderDetail.activeOrderDetailList,
  };
};

export default connect(mapToStateProps, actions)(Cart);
