import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Button,
  Dimensions,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Navigation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Menü</Text>
        </View>
        <View style={styles.menuContainer}>
          <View>
            {/* <TouchableOpacity style={styles.menuBox} onPress={() => Actions.Anasayfa()}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image/>
                                <Text>Anasayfa</Text>
                            </View>
                            <Image/>
                        </TouchableOpacity> */}
            <TouchableOpacity
              style={styles.menuBox}
              onPress={() => Actions.Table()}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image />
                <Text>Siparişler</Text>
              </View>
              <Image />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuBox}
              onPress={() => Actions.Mutfak()}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image />
                <Text>Mutfak</Text>
              </View>
              <Image />
            </TouchableOpacity>
          </View>
          <Button onPress={() => Actions.drawerClose()} title="Çıkış Yap" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  banner: {
    backgroundColor: '#3ec978',
    width: width * 0.8,
    height: 150,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bannerTitle: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 20,
  },
  menuContainer: {
    marginVertical: 30,
  },
  menuBox: {
    height: 46,
    backgroundColor: '#f5f5f5',
    width: width * 0.7,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
