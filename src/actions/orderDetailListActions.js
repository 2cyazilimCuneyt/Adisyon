import axios from 'axios';
import { ADD_ORDER_DETAIL_LIST, ORDER_DETAIL_INITIAL, SAVE_ORDER_DETAIL_LIST } from './types';

const API_URL = 'https://adisyon.crm2c.gen.tr/api/Order/AddOrderDetailList';

export const addOrderDetailList = (orderDetail) => {
    return (dispatch) => {
        dispatch ({
            type: ADD_ORDER_DETAIL_LIST,
            payload: orderDetail
        })
    }
}

export const updateOrderDetailList = (orderDetail, orderDetailList) => {
    let selectedDetails = orderDetailList.filter(item => {
        return item.productId ===  orderDetail.productId;

     });
     if (selectedDetails.length>0) {
        selectedDetails[0].count = selectedDetails[0].count+orderDetail.count;
        
        
     }else{
        orderDetailList.push(orderDetail);
     }

     orderDetailList = orderDetailList.filter(item => {
        return item.count !==  0;
     });

     console.log('orderDetailList------------------->', orderDetailList)
    return (dispatch) => {
        dispatch ({
            type: ADD_ORDER_DETAIL_LIST,
            payload: orderDetailList
        })
    }
}

export const saveOrderDetailList = (orderDetailList) => {
    return (dispatch) => {
        axios.post(API_URL,orderDetailList)
        .then(response => {
            console.log('SAVE_ORDER_DETAIL_LIST----->', response.data);
            dispatch ({
                type: SAVE_ORDER_DETAIL_LIST,
                payload: response.data
            })
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