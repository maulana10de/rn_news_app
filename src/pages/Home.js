import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {connect} from 'react-redux';
import {StackActions} from '@react-navigation/native';
import {getNews} from '../redux/actions';
import moment from 'moment';

import NewCard from '../components/NewCard';
import {Header} from 'react-native-elements';

import logo from '../assets/images/logo.png';

class Home extends Component {
  componentDidMount() {
    this.props.getNews();
    if (!this.props.user) {
      this.props.navigation.dispatch(StackActions.replace('Login'));
    }
  }

  renderCardNew = () => {
    return this.props.newsData.map((e, i) => {
      return <NewCard key={i} newsData={e} />;
    });
  };

  render() {
    return (
      <View style={{backgroundColor: 'white'}}>
        <Header
          containerStyle={{
            backgroundColor: 'white',
            shadowColor: '#470000',
            shadowOffset: {width: 0, height: 10},
            shadowOpacity: 0.5,
            elevation: 3,
          }}
          leftComponent={
            <Image
              source={logo}
              style={{height: 25, width: 25, borderRadius: 10}}
            />
          }
        />
        <ScrollView>
          <View style={{marginVertical: 25}}>
            <FlatList
              data={this.props.newsData}
              renderItem={({item, index}) =>
                index >= 3 &&
                index < 6 && (
                  <View style={{padding: 10}}>
                    <Image
                      source={{uri: item.urlToImage}}
                      style={{
                        height: 200,
                        width: 350,
                        borderRadius: 10,
                      }}
                    />
                    <View style={{width: 350}}>
                      <Text style={{paddingTop: 10, height: 60}}>
                        {item.title}
                      </Text>
                      <Text style={{fontSize: 10, color: 'grey', marginTop: 7}}>
                        {moment(item.publishedAt).format('LL')}
                      </Text>
                    </View>
                  </View>
                )
              }
              keyExtractor={(item) => item.title}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View
            style={{
              margin: 15,
              paddingBottom: 10,
              borderBottomColor: 'red',
              borderBottomWidth: 2,
            }}>
            <Text>Trending</Text>
          </View>
          <View style={{backgroundColor: 'white'}}>{this.renderCardNew()}</View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({LoginReducer, NewsReducer}) => {
  console.log('Check MapToProps', NewsReducer);
  return {
    user: LoginReducer.username,
    newsData: NewsReducer.news,
  };
};

export default connect(mapStateToProps, {getNews})(Home);
