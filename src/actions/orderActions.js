import axios from 'axios';
import { ORDER_LIST } from './types';

const API_URL = 'https://adisyon.crm2c.gen.tr/api/Order/GetOrderListByUserId';

export const getOrderList = () => {
    return (dispatch) => {
        axios.get(API_URL)
        console.log('order list ------->', response.data)
        .then(response => {
            dispatch ({
                type: ORDER_LIST,
                payload: response.data
            });
        });
    }
}
