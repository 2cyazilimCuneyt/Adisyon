import axios from 'axios';
import { TABLE_LIST } from './types';

const API_URL = 'https://adisyon.crm2c.gen.tr/api/Admin/GetTableListByRoomId?RoomId=';

export const getTableList = (roomId) => {
    return (dispatch) => {
        axios.get(API_URL + roomId)
        .then(response => {
            console.log('getTableList', response.data)
            dispatch({
                    type: TABLE_LIST,
                    payload:response.data
            })
        })
    }
}
