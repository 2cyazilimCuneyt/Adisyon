import axios from 'axios';
import { ADD_ORDER_DETAIL_LIST, ORDER_DETAIL_INITIAL } from './types';

const API_URL = 'https://adisyon.crm2c.gen.tr/api/Order/AddOrderDetailList';

export const addOrderDetailList = (orderDetail) => {
    return (dispatch) => {
        dispatch ({
            type: ADD_ORDER_DETAIL_LIST,
            payload: orderDetail
        })
    }
}

export const orderDetailInitial = () => {
    return (dispatch) => {
        dispatch ({
            type: ORDER_DETAIL_INITIAL,
        })
    }
}