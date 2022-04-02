import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import MenuReducer from './menuReducer';
import SelectedMenuReducer from './selectedMenuReducer';
import ProductReducer from './productReducer';
import SelectedProductReducer from './selectedProductReducer';
import OrderReducer from './orderReducer';
import OrderDetailReducer from './orderDetailReducer';

export default combineReducers({
    auth:AuthReducer,
    menu:MenuReducer,
    selectedMenu:SelectedMenuReducer,
    product:ProductReducer,
    selectedProduct:SelectedProductReducer,
    order:OrderReducer,
    orderDetail:OrderDetailReducer
});