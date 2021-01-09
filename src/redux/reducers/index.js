import {combineReducers} from 'redux';
import LoginReducer from './loginReducer';
import NewsReducer from './newsReducer';

export default combineReducers({
  LoginReducer,
  NewsReducer,
});
