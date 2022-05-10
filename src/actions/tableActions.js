import axios from 'axios';
import {TABLE_LIST, ACTIVE_TABLE} from './types';

const API_URL =
  'https://api.terracesarkoy.com/api/Admin/GetTableListByRoomId?RoomId=';

export const getTableList = id => {
  return dispatch => {
    axios.get(API_URL + id).then(response => {
      dispatch({
        type: TABLE_LIST,
        payload: response.data,
      });
    });
  };
};

export const activeTable = table => {
  return dispatch => {
    dispatch({
      type: ACTIVE_TABLE,
      payload: table,
    });
  };
};
