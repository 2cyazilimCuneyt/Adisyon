import axios from 'axios';
import { MENU_SUCCESS, MENU_FAILED, MENU_LIST } from './types';

const API_URL = 'https://adisyon.crm2c.gen.tr/api/Product/GetMenuList';
//let menu = [];

export const getMenuList = () => {
    return (dispatch) => {
        axios.get(API_URL)
        .then(response => {
            dispatch({
                    type: MENU_LIST,
                    payload:response.data
            })
        })
    }
}

const menuSuccess = async (dispatch, response) => {
    console.log('2');
    console.log("Menu",response.data);
    dispatch({
        type: MENU_SUCCESS,
        payload: response.data
    }) 
}

const menuFailed = (dispatch) => {
    dispatch({
        type: MENU_FAILED
    })
}

