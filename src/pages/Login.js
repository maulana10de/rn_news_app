import React from 'react';
import {View, Image} from 'react-native';
import {Button, Icon, Input} from 'react-native-elements';
import {onUserLogin, onKeepLogin} from '../redux/actions';
import {connect} from 'react-redux';
import {StackActions} from '@react-navigation/native';

import logo from '../assets/images/logo.png';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  componentDidMount() {
    this.props.onKeepLogin();
  }

  componentDidUpdate() {
    if (this.props.user) {
      this.props.navigation.dispatch(StackActions.replace('TabNavigation'));
    }
  }

  onBtLogin = () => {
    this.props.onUserLogin(this.state.username);
  };

  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={logo} style={{width: 80, height: 80, marginTop: 80}} />
        </View>
        <View style={{margin: 70, flex: 1}}>
          <Input
            leftIcon={
              <Icon name="user" size={24} type="feather" color="grey" />
            }
            placeholder="Username"
            onChangeText={(val) => this.setState({username: val})}
          />

          <Button
            title="login"
            buttonStyle={{
              width: '85%',
              borderRadius: 10,
              backgroundColor: '#00bcd4',
            }}
            containerStyle={{
              alignItems: 'center',
            }}
            titleStyle={{
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
            onPress={this.onBtLogin}
            loading={this.props.loading}
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = ({LoginReducer}) => {
  return {
    user: LoginReducer.username,
    loading: LoginReducer.loading,
  };
};

export default connect(mapStateToProps, {onUserLogin, onKeepLogin})(Login);
