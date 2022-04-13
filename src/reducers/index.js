import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import RoomReducer from './roomReducer';
import TableReducer from './tableReducer';
import MenuReducer from './menuReducer';
import ProductReducer from './productReducer';

export default combineReducers({
    auth:AuthReducer,
    room:RoomReducer,
    table:TableReducer,
    menu:MenuReducer,
    product:ProductReducer,
});