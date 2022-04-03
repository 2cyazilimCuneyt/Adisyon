import axios from 'axios';
import {ORDER_DETAIL} from './types';

const API_URL = 'https://adisyon.crm2c.gen.tr/api/Order/AddOrderDetail';

export const addOrderDetail = () => {
    return (dispatch) = (
        axios.get(API_URL)
        .then(response => {
            dispatch = ({
                type: ORDER_DETAIL,
                payload: response.data
            })
        })
    )
}