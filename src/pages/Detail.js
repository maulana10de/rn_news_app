import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import moment from 'moment';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: props.route.params.detail,
    };
  }

  render() {
    const {detail} = this.state;
    return (
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 30,
            backgroundColor: 'white',
          }}>
          <View>
            <Text style={{fontSize: 10}}>
              <Text style={{fontWeight: 'bold'}}>NEWS - </Text>
              {moment(detail.publishedAt).format('LLL')}
            </Text>
            <Text style={{fontSize: 25, paddingTop: 10, fontWeight: 'bold'}}>
              {detail.title}
            </Text>

            <Text style={{fontSize: 11, paddingTop: 15}}>
              Konten ini ditulis oleh{' '}
              <Text style={{fontWeight: 'bold', color: 'skyblue'}}>
                {detail.author}
              </Text>
            </Text>

            <View style={{marginVertical: 40}}>
              <Image
                source={{uri: detail.urlToImage}}
                style={{height: 200, borderRadius: 10}}
              />
            </View>
            <Text style={{paddingBottom: 10}}>{detail.content}</Text>
            <Text>{detail.description}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Detail;
