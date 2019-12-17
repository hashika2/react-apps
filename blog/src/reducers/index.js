import postReducer from './postReducer';
import {combineReducers} from 'redux';
import userReducers from './userReducer';

export default combineReducers({
    posts:postReducer,
    user:userReducers
})
