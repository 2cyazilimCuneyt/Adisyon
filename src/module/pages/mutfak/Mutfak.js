import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  ScrollView,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../../actions';
import {Actions} from 'react-native-router-flux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Mutfak extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <View style={styles.bannerContainer}>
            <TouchableOpacity onPress={() => Actions.drawerOpen()}>
              <Image
                source={require('../../assets/images/menu.png')}
                style={{width: width * 0.07, height: width * 0.07}}
              />
            </TouchableOpacity>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
              MUTFAK
            </Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.mutfakConainer}>
            <View style={styles.mutfakHeader}>
              <Text style={styles.mutfakHeaderText}>Kullanıcı</Text>
              <Text style={styles.mutfakHeaderText}>
                Oda Adı / {this.props.activeTables.name}{' '}
              </Text>
            </View>
            <ScrollView>
              <Text
                style={{
                  textAlign: 'center',
                  marginVertical: 10,
                  fontWeight: '300',
                  fontSize: 12,
                }}>
                5 ADET ÜRÜN BEKLİYOR
              </Text>
              <FlatList
                data={this.props.orderDetailList}
                renderItem={({item, index}) => (
                  <View style={styles.mutfakContent}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View style={styles.sayac}>
                        <Text>00:00</Text>
                      </View>
                      <Text>1 </Text>
                      <Text> Tam - {item.productName}</Text>
                    </View>
                    <TouchableOpacity style={styles.hazir}>
                      <Text>Hazır</Text>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={item => item.orderListId}
              />
            </ScrollView>
            <View style={styles.mutfakFooter}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonBox}>
                  <Image source={require('../../assets/onay.png')} />
                  <Text
                    style={{fontSize: 17, color: '#fff', fontWeight: '600'}}>
                    Tümü Hazır
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBox}>
                  <Image source={require('../../assets/print.png')} />
                  <Text
                    style={{fontSize: 17, color: '#fff', fontWeight: '600'}}>
                    Yazdır
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
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
  },
  bannerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.9,
  },
  mutfakConainer: {
    width: width * 0.85,
    height: height * 0.5,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderColor: '#3ec978',
    borderWidth: 1,
    marginTop: 15,
  },
  mutfakHeader: {
    height: height * 0.07,
    backgroundColor: '#3ec978',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  mutfakHeaderText: {
    color: '#fff',
    fontWeight: '600',
  },
  mutfakContent: {
    width: width * 0.75,
    height: height * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  sayac: {
    padding: 7,
    backgroundColor: '#f6f6f6',
    borderRadius: 5,
    marginRight: 10,
  },
  hazir: {
    padding: 7,
    backgroundColor: '#3ec978',
    borderRadius: 5,
  },
  mutfakFooter: {
    height: height * 0.07,
    borderColor: '#3ec978',
    borderTopWidth: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: width * 0.8,
    height: height * 0.13,
  },
  buttonBox: {
    width: width * 0.38,
    height: height * 0.05,
    backgroundColor: '#3ec978',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
  },
});

const mapToStateProps = state => {
  return {
    orderDetailList: state.orderDetail.orderDetailList.data,
    activeTables: state.table.activeTable,
    products: state.product.products,
    activeOrders: state.order.activeOrder,
  };
};

export default connect(mapToStateProps, actions)(Mutfak);
