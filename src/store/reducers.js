import { combineReducers } from 'redux';
import { homeReducer } from './Home/reducers'
import { contactUsReducer } from './ContactUs/reducers';


export default combineReducers({
    home: homeReducer,
    contactUs: contactUsReducer
});
