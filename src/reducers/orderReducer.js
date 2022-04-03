import { GET_ORDER_LIST } from '../actions/types';


export default (state = {}, action) => {
    switch (action.type) {
        case GET_ORDER_LIST:
            return action.payload
       default:
            return state;
    }
}