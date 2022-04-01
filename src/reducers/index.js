import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import MenuReducer from './menuReducer';
import SelectedMenuReducer from './selectedMenuReducer';
import ProductReducer from './productReducer';
import SelectedProductReducer from './selectedProductReducer'

export default combineReducers({
    auth:AuthReducer,
    menu:MenuReducer,
    selectedMenu:SelectedMenuReducer,
    product:ProductReducer,
    selectedProduct:SelectedProductReducer,
});