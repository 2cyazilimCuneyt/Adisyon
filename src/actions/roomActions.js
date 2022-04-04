import axios from 'axios';
import { ROOM_LIST } from './types';

const API_URL = 'https://adisyon.crm2c.gen.tr/api/Admin/GetRoomList';

export const getRoomList = () => {
    return (dispatch) => {
        axios.get(API_URL)
        .then(response => {
            console.log('getRoomList', response.data)
            dispatch({
                    type: ROOM_LIST,
                    payload:response.data
            })
        })
    }
}
