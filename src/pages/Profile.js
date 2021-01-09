import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Header} from 'react-native-elements';
import {connect} from 'react-redux';

class Profile extends Component {
  render() {
    return (
      <View>
        <Header
          containerStyle={{
            backgroundColor: 'white',
            shadowColor: '#470000',
            shadowOffset: {width: 0, height: 10},
            shadowOpacity: 0.5,
            elevation: 5,
          }}
          centerComponent={
            <Text style={{letterSpacing: 2, fontWeight: 'bold'}}>
              {Boolean(this.props.user)
                ? this.props.user.toUpperCase()
                : 'Welcome to GoodNews'}
            </Text>
          }
        />
      </View>
    );
  }
}

const mapStateToProps = ({LoginReducer}) => {
  return {
    user: LoginReducer.username,
  };
};

export default connect(mapStateToProps)(Profile);
