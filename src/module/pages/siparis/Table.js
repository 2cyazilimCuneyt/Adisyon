import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView,
  Platform,
  TouchableHighlight,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {
  getRoomList,
  getTableList,
  activeTable,
  addToOrder,
  orderDetailInitial,
  activeRoom,
} from '../../../actions';
import ModalDropdown from 'react-native-modal-dropdown';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Table extends Component {
  state = {
    roomName: 'ODA SEÇİNİZ..',
  };
  UNSAFE_componentWillMount() {
    this.props.getRoomList();
  }

  onPressed = roomId => {
    let a = this.props.rooms.filter(item => {
      return item.roomId === roomId;
    });
    this.setState({roomName: a[0].name});
    this.props.getTableList(roomId);
  };

  onPressedTable = table => {
    this.props.activeTable(table);
    Actions.Menus();
    let order = {
      orderId: 0,
      tableId: table.tableId,
      date: '1972-07-17T03:55:52.590Z',
      description: 'sint sed',
      userId: 0,
      isClosed: false,
      isReady: false,
      totalPrice: 0,
    };
    this.props.addToOrder(order);
  };

  _dropdown_2_renderButtonText(rowData) {
    const {name, roomId} = rowData;
    return `${name} -  ${roomId}`;
  }

  _dropdown_2_renderRow(rowData) {
    return (
      <TouchableOpacity
        underlayColor="cornflowerblue"
        onPress={() => this.onPressed(rowData.roomId)}>
        <View style={styles.dropdown_2_row}>
          <Text style={styles.dropdown_2_row_text}>{`${rowData.name}`}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const {rooms, tables} = this.props;
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
            <Text style={{color: '#fff', fontSize: 15}}>Sipariş / </Text>
          </View>
        </View>
        <ScrollView style={{width: width, marginVertical: 20}}>
          <View style={styles.siparisContainer}>
            {/* <ScrollView horizontal={true}>
              <FlatList
                data={rooms}
                numColumns={30}
                renderItem={({item, index}) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginVertical: 10,
                    }}>
                    <TouchableOpacity
                      style={styles.roomBox}
                      onPress={() => this.onPressed(item.roomId)}>
                      <Text style={styles.roomText}> {item.name} </Text>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={item => item.roomId}
                style={{marginHorizontal: 23}}
              />
            </ScrollView> */}

            <ModalDropdown
              options={rooms}
              style={styles.roomBox}
              defaultValue={this.state.roomName}
              renderButtonText={rowData =>
                this._dropdown_2_renderButtonText(rowData)
              }
              renderRow={this._dropdown_2_renderRow.bind(this)}
              defaultTextStyle={styles.defaultText}
              dropdownStyle={styles.dropdown}
              dropdownTextStyle={styles.dropdownText}
            />

            <FlatList
              data={tables}
              columnWrapperStyle={{
                justifyContent: 'space-between',
                width: width * 0.8,
              }}
              numColumns={3}
              renderItem={({item, index}) => (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical: 10,
                  }}>
                  <TouchableOpacity
                    style={styles.siparisBox}
                    onPress={() => this.onPressedTable(item)}>
                    <Text style={styles.siparisText}> {item.name} </Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={item => item.tableId}
            />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: width * 0.8,
                marginVertical: 30,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: '#5CA026',
                  }}></View>
                <Text style={{fontSize: 10, color: '#5CA026', marginLeft: 5}}>
                  Sipariş Masada
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: '#FF554A',
                  }}></View>
                <Text style={{fontSize: 10, color: '#FF554A', marginLeft: 5}}>
                  Sipariş Bekleniyor
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: '#9d9d9d',
                  }}></View>
                <Text style={{fontSize: 10, color: '#9d9d9d', marginLeft: 5}}>
                  Masa Boş
                </Text>
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
    width: width * 0.85,
  },
  siparisContainer: {
    alignItems: 'center',
  },
  roomBox: {
    width: width * 0.8,
    height: height * 0.05,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderColor: '#3ec978',
    borderWidth: 1,
  },
  defaultText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#9d9d9d',
  },
  roomText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#3ec978',
    letterSpacing: 1,
  },
  dropdown: {
    height: height * 0.3,
    borderRadius: 3,
  },
  dropdownText: {
    fontSize: 13,
    color: '#3ec978',
  },
  dropdown_2_row: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  dropdown_2_row_text: {
    marginHorizontal: 4,
    fontSize: 16,
    color: '#3ec978',
    textAlignVertical: 'center',
  },
  siparisBox: {
    width: width * 0.25,
    height: height * 0.09,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  siparisText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#9d9d9d',
  },
});

const mapToStateProps = state => {
  return {
    rooms: state.room.rooms,
    tables: state.table.tables,
    activeRooms: state.room.activeRoom,
  };
};

export default connect(mapToStateProps, {
  getRoomList,
  getTableList,
  activeTable,
  addToOrder,
  orderDetailInitial,
  activeRoom,
})(Table);
