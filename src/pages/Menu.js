import {CommonActions} from '@react-navigation/native';
import {Left, List, ListItem} from 'native-base';
import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import {onUserLogout} from '../redux/actions';
import {Header} from 'react-native-elements';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    console.log(this.props.user);
    if (!this.props.user) {
      // this.props.navigation.navigate('Login');
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'Login',
          },
        ],
      });

      // untuk menjalankan fungsi commonaction
      this.props.navigation.dispatch(resetAction);
    }
  }

  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Header
          containerStyle={{
            backgroundColor: 'white',
            shadowColor: '#470000',
            shadowOffset: {width: 0, height: 10},
            shadowOpacity: 0.5,
            elevation: 5,
          }}
          centerComponent={
            <Text style={{letterSpacing: 2, fontWeight: 'bold'}}>Menu</Text>
          }
        />
        <List>
          <ListItem>
            <Left>
              <TouchableWithoutFeedback
                onPress={this.props.navigation.navigate('Profile')}>
                <Text>Profile</Text>
              </TouchableWithoutFeedback>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <TouchableWithoutFeedback onPress={this.props.onUserLogout}>
                <Text>Logout</Text>
              </TouchableWithoutFeedback>
            </Left>
          </ListItem>
        </List>
      </View>
    );
  }
}

const mapStateToProps = ({LoginReducer}) => {
  return {
    user: LoginReducer.username,
  };
};

export default connect(mapStateToProps, {onUserLogout})(Menu);
