import axios from 'axios';
import { TABLE_LIST } from './types';

const API_URL = 'https://adisyon.crm2c.gen.tr/api/Admin/GetTableListByRoomId?RoomId=';

export const getTableList = (id) => {
    return (dispatch) => {
        console.log('API_URL + id ----------->',API_URL + id)
        axios.get(API_URL + id)
        .then(response => {
            console.log('getTableList', response.data)
            dispatch({
                    type: TABLE_LIST,
                    payload:response.data
            })
        })
    }
}
