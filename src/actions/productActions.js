import axios from 'axios';
import { PRODUCT_LIST } from './types';

const API_URL = 'https://adisyon.crm2c.gen.tr/api/Product/GetListByMenuId?MenuId=';

export const getProductList = (id) => {
    return (dispatch) => {
        axios.get(API_URL + id)
        .then(response => {
            dispatch({
                    type: PRODUCT_LIST,
                    payload:response.data
            })
        })
    }
}