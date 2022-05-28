import axios from 'axios';
import {ROOM_LIST, ACTIVE_ROOM} from './types';

const API_URL = 'https://api.terracesarkoy.com/api/Admin/GetRoomList';

export const getRoomList = user => {
  return dispatch => {
    axios
      .get(API_URL, {
        headers: {
          Authorization: 'Bearer ' + user.token,
        },
      })
      .then(response => {
        console.log('1-------------->', response.data);
        dispatch({
          type: ROOM_LIST,
          payload: response.data,
        });
      });
  };
};

export const activeRoom = room => {
  return dispatch => {
    dispatch({
      type: ACTIVE_ROOM,
      payload: room,
    });
  };
};
