import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {loginRememberSuccess} from '../../../actions';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Anasayfa extends Component {
  componentDidMount = async () => {
    this._isMounted = true;

    var data = {
      email: this.props.user.email,
      password: this.props.user.password,
    };
    /*  
        try {
        let fcmtoken = await AsyncStorage.getItem('fcmToken');
        console.log("anasayfa bildirim-token : "+ fcmtoken);
        
        } catch (error) {
        console.log("cacte düştü: "+ error);
        } */
  };
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <View style={styles.bannerContainer}>
            <TouchableOpacity onPress={() => Actions.drawerOpen()}>
              <Text>Menü</Text>
            </TouchableOpacity>
            <Text>Anasayfa / </Text>
          </View>
        </View>
        <ScrollView style={{width: width, marginVertical: 20}}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.boxContainer}>
              <View style={styles.box}>
                <Text style={styles.boxTitle}>₺ 0.00</Text>
                <Text style={styles.boxText}>Alınan Ödemeler</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.boxTitle}>₺ 0.00</Text>
                <Text style={styles.boxText}>Toplam Gider Tutarı</Text>
              </View>
            </View>
            <View style={styles.boxContainer}>
              <View style={styles.box}>
                <Text style={styles.boxTitle}>₺ 0.00</Text>
                <Text style={styles.boxText}>Açık Sipariş Toplamı</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.boxTitle}>0</Text>
                <Text style={styles.boxText}>Ağırlanan Misafir Sayısı</Text>
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
    backgroundColor: '#ff554a',
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
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.85,
    height: width * 0.45,
  },
  box: {
    width: width * 0.4,
    height: width * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  boxTitle: {
    fontWeight: '600',
    color: '#515251',
    fontSize: 24,
    marginBottom: 5,
  },
  boxText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#9d9d9d',
  },
});

const mapStateToProps = state => {
  const {email, password, user} = state.auth;

  return {
    email,
    password,
    user,
  };
};

export default connect(mapStateToProps, {loginRememberSuccess})(Anasayfa);
