import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card, Container, Header, Row, Left, Button} from 'native-base';
import {Col, Grid} from 'react-native-easy-grid';
import moment from 'moment';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const NewCard = ({newsData}, props) => {
  const navigation = useNavigation();
  return (
    <Grid
      style={{
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: 'white',
      }}>
      <Col style={{paddingRight: 5}}>
        <View>
          <Text
            style={{fontWeight: 'bold'}}
            onPress={() => navigation.navigate('Detail', {detail: newsData})}>
            {newsData.title}
          </Text>
          <Text style={{fontSize: 11, color: 'grey', marginTop: 10}}>
            {newsData.author}
          </Text>

          <Text style={{fontSize: 10, color: 'grey'}}>
            {moment(newsData.publishedAt).format('LL')}
          </Text>
        </View>
      </Col>
      <Col style={{backgroundColor: '#635DB7', width: '35%', borderRadius: 10}}>
        <View>
          <Image
            source={{uri: newsData.urlToImage}}
            style={{height: 100, borderRadius: 10}}
          />
        </View>
      </Col>
    </Grid>
  );
};

export default NewCard;
