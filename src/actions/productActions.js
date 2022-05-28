import axios from 'axios';
import {PRODUCT_LIST} from './types';

const API_URL =
  'https://api.terracesarkoy.com/api/Product/GetListByMenuId?MenuId=';

export const getProductList = (id, user) => {
  return dispatch => {
    axios
      .get(API_URL + id, {
        headers: {
          Authorization: 'Bearer ' + user.token,
        },
      })
      .then(response => {
        dispatch({
          type: PRODUCT_LIST,
          payload: response.data,
        });
      });
  };
};
