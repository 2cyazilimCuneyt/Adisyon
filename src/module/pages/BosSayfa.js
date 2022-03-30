import React, { Component } from 'react';
import { View, StyleSheet, Image, ActivityIndicator ,Text} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

class BosSayfa extends Component {
  _isMounted = false;
    constructor(props) {
        super(props)
        this.state = {
          timePassed: false,
        }
      }
      componentDidMount = async () => {
        this._isMounted = true;
        const kullaniciBilgileri = await getMultiple(this.props.user);
        console.log("kullaniciBilgileri",kullaniciBilgileri,this.props.user)
        this.setState({ kullaniciBilgileri: kullaniciBilgileri })
        if (kullaniciBilgileri.user != null && Object.keys(kullaniciBilgileri.user).length !== 0) {
          kullaniciBilgileri.user.Adi ?
              Actions.Anasayfa():Actions.Login()
        }
        else {
          Actions.Login()
        }
      }
      componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state,callback)=>{
            return;
        };
    }
    render() {
        return (
            <View style={{
                flex: 1,
                resizeMode: 'cover',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white'
              }}>
                <ActivityIndicator size={"large"} color={'#ff554a'} />
                <Text fontPoppins color='#9d9d9d' style={{ marginTop: 10 }}>Yükleniyor...</Text>
              </View>
        )
    }
}

const mapStateToProps = state => {
    const { user } = state.auth;
  
    return {
      user
    }
  }
  export default connect(mapStateToProps,
    {})(BosSayfa);
