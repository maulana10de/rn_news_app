import Axios from 'axios';
import {APIURL} from '../../utils/api_urls';

export const getNews = () => {
  return async (dispatch) => {
    try {
      let results = await Axios.get(
        APIURL +
          '/v2/top-headlines?country=id&category=business&apiKey=494c12e4839a4900966d5f31f9e33ac5',
      );
      // console.log('GET DATA :', results.data);
      dispatch({
        type: 'GET_NEWS',
        payload: results.data.articles,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
