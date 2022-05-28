/* eslint-disable prettier/prettier */
import axios from 'axios';
import { ADD_ORDER, GET_ORDER_LIST, GET_ORDER_BY_TABLE_ID, UPDATE_ORDER_LIST } from './types';

const API_URL = 'https://api.terracesarkoy.com/api/Order/AddOrder';

export const addToOrder = (order, user) => {
    console.log('1---------->', order);
    return (dispatch) => {
        axios.post(API_URL, order, {
            headers: {
              Authorization: 'Bearer ' + user.token,
            },
          })
        .then(response => {
            console.log('Order Kaydedildi 2---------->', response.data);
            dispatch ({
                type: ADD_ORDER,
                payload: response.data,
            });
        });
    };
};

export const getOrderList = (user) => {
    return ( dispatch ) => {
        axios.get('https://api.terracesarkoy.com/api/Order/GetOrderListByTableIdAll', {
            headers: {
              Authorization: 'Bearer ' + user.token,
            },
          })
        .then(response => {
            dispatch ({
                type: GET_ORDER_LIST,
                payload: response.data,
            });
        });
    };
};

export const updateOrderList = (order, user) => {
    return (dispatch) => {
        axios.post('https://api.terracesarkoy.com/api/Order/UpdateOrder', order, {
            headers: {
              Authorization: 'Bearer ' + user.token,
            },
          })
        .then(response => {
            dispatch ({
                type: UPDATE_ORDER_LIST,
                payload:response.data,
            });
        });
    };
};

export const getOrderByTableId = (id, user) => {
    return (dispatch) => {
        axios.get('https://api.terracesarkoy.com/api/Order/GetOrderListByTableIdOpen?id=' + id, {
            headers: {
              Authorization: 'Bearer ' + user.token,
            },
          })
        .then(response => {
            dispatch ({
                type: GET_ORDER_BY_TABLE_ID,
                payload: response.data[0],
            });
        });
    };
};
