import axios from 'axios';
import { PRODUCT_LIST } from './types';

const API_URL = 'https://adisyon.crm2c.gen.tr/api/Product/GetListByMenuId?MenuId=';

export const getProductList = () => {
    return (dispatch) => {
        axios.get(API_URL)
        .then(response => {
            console.log('response', response)
            dispatch({
                    type: PRODUCT_LIST,
                    payload:response.data
            })
        })
    }
}
