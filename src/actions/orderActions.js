import axios from 'axios';
import { ADD_ORDER, ACTIVE_ORDER } from './types';

const API_URL = 'https://api.terracesarkoy.com/api/Order/AddOrder';

export const addToOrder = (order) => {
    return (dispatch) => {
        axios.post(API_URL, order)
        .then(response => {
            dispatch ({
                type: ADD_ORDER,
                payload: response.data
            })
        })
    }
}

/* export const addActiveOrder = (order) => {
    console.log('table----------->', order);
    return (dispatch) => {
        dispatch({
             type: ACTIVE_ORDER,
             payload: order,
        })
    }
}
 */
