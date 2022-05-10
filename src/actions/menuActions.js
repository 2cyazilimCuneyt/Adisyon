import axios from 'axios';
import {MENU_LIST} from './types';

const API_URL = 'https://api.terracesarkoy.com/api/Product/GetMenuList';

export const getMenuList = () => {
  return dispatch => {
    axios.get(API_URL).then(response => {
      dispatch({
        type: MENU_LIST,
        payload: response.data,
      });
    });
  };
};
