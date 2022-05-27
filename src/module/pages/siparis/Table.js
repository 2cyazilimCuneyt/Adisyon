import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Platform,
  RefreshControl,
  ActivityIndicator,
  Button,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import * as actions from '../../../actions';
import ModalDropdown from 'react-native-modal-dropdown';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Table extends Component {
  constructor() {
    super();

    var today = new Date(),
      date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate();

    this.state = {
      date: date,
      roomName: 'Oda Seçiniz..',
      loading: false,
      refreshing: false,
      roomId: 0,
    };
  }

  UNSAFE_componentWillMount() {
    this.props.getRoomList();
  }

  onPressed = roomId => {
    let a = this.props.rooms.filter(item => {
      return item.roomId === roomId;
    });
    this.setState({roomName: a[0].name, roomId: roomId});
    this.props.getTableList(roomId);
  };

  onPressedTable = table => {
    if (table.statu === 0) {
      this.setState({loading: true});
      this.props.activeTable(table);

      let order = {
        orderId: 0,
        tableId: table.tableId,
        date: new Date(),
        description: '',
        userId: 0,
        isClosed: false,
        isReady: false,
        totalPrice: 0,
        closeDate: new Date(),
      };
      this.props.addToOrder(order);
      Actions.Menus();
      this.setState({loading: false});
    } else if (table.statu === 1) {
      this.setState({loading: true});
      this.props.getOrderByTableId(table.tableId);
      setTimeout(() => {
        this.props.getOrderDetailList(this.props.activeOrders.orderId);
        this.props.activeTable(table);
        setTimeout(() => {
          Actions.Menus();
          this.setState({loading: false});
        }, 3000);
      }, 3000);
    }
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

  _handleRefresh = () => {
    this.setState({refreshing: true});

    setTimeout(() => {
      this.props.getTableList(this.state.roomId);
      this.setState({refreshing: false});
    }, 3000);
  };

  render() {
    const {rooms, tables} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <View style={styles.bannerContainer}>
            <View
              style={{
                width: width * 0.19,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity onPress={() => Actions.drawerOpen()}>
                <Image
                  source={require('../../assets/images/menu.png')}
                  style={{width: width * 0.07, height: width * 0.07}}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._handleRefresh}>
                <Image
                  source={require('../../assets/images/yenile.png')}
                  style={{width: width * 0.07, height: width * 0.07}}
                />
              </TouchableOpacity>
            </View>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
              {' '}
              Sipariş /{' '}
            </Text>
          </View>
        </View>
        <View style={{width: width, height: height * 0.84, marginVertical: 20}}>
          <View style={styles.siparisContainer}>
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
            {this.state.refreshing ? <ActivityIndicator /> : null}
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
                    loading={this.state.loading}
                    style={styles.siparisBox}
                    onPress={() => this.onPressedTable(item)}>
                    {item.statu === 0 ? (
                      <Text style={styles.siparisText}>{item.name}</Text>
                    ) : item.statu === 1 ? (
                      <Text style={styles.siparisText1}>{item.name}</Text>
                    ) : (
                      <Text style={styles.siparisText2}>{item.name}</Text>
                    )}
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={item => item.tableId}
            />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: width * 0.8,
                marginVertical: 30,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 20,
                }}>
                <View
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: '#FF554A',
                  }}
                />
                <Text style={{fontSize: 10, color: '#FF554A', marginLeft: 5}}>
                  Açık Masa
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: '#9d9d9d',
                  }}
                />
                <Text style={{fontSize: 10, color: '#9d9d9d', marginLeft: 5}}>
                  Masa Boş
                </Text>
              </View>
            </View>
          </View>
        </View>
        {this.state.loading ? (
          <ActivityIndicator
            size="large"
            color={'#3ec978'}
            animating={this.state.loading}
            style={styles.activityIndicator}
          />
        ) : null}
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
    marginBottom: 10,
  },
  defaultText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#9d9d9d',
    width: width * 0.7,
    textAlign: 'center',
  },
  roomText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#3ec978',
    letterSpacing: 1,
  },
  dropdown: {
    height: height * 0.45,
    borderRadius: 3,
    width: width * 0.7,
    marginTop: 13,
  },
  dropdownText: {
    fontSize: 13,
    color: '#3ec978',
  },
  dropdown_2_row: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
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
  siparisText1: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FF554A',
  },
  siparisText2: {
    fontSize: 17,
    fontWeight: '700',
    color: '#5CA026',
  },
  activityIndicator: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const mapToStateProps = state => {
  return {
    users: state.auth,
    rooms: state.room.rooms,
    tables: state.table.tables,
    activeRooms: state.room.activeRoom,
    activeOrders: state.order.activeOrder,
    activeTables: state.table.activeTable,
  };
};

export default connect(mapToStateProps, actions)(Table);
