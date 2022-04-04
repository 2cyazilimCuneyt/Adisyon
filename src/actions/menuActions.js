import axios from 'axios';
import { MENU_LIST } from './types';

const API_URL = 'https://adisyon.crm2c.gen.tr/api/Product/GetMenuList';
//let menu = [];

export const getMenuList = () => {
    return (dispatch) => {
        axios.get(API_URL)
        .then(response => {
            console.log('response', response)
            dispatch({
                    type: MENU_LIST,
                    payload:response.data
            })
        })
    }
}
