import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import MenuReducer from './menuReducer';
import SelectedMenuReducer from './selectedMenuReducer';

export default combineReducers({
    auth:AuthReducer,
    menu:MenuReducer,
    selected:SelectedMenuReducer,
});