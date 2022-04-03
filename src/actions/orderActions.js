import axios from 'axios';
import { GET_ORDER_LIST } from './types';

export const getOrderList = () => {
    return (dispatch) => {
        axios.get('https://adisyon.crm2c.gen.tr/api/Order/GetOrderListByUserId')
        console.log('order list ------->', response.data)
        .then(response => {
            dispatch ({
                type: GET_ORDER_LIST,
                payload: response.data
            });
        });
    }
}
