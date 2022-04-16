import {ADD_ORDER_DETAIL_LIST, ORDER_DETAIL_INITIAL, SAVE_ORDER_DETAIL_LIST} from '../actions/types';

const INITIAL_STATE = {
    orderDetailList: []
}

export default (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ORDER_DETAIL_LIST:
            return {...state, orderDetailList: action.payload}
        case SAVE_ORDER_DETAIL_LIST:
            return {...state, orderDetailList: action.payload}
        case ORDER_DETAIL_INITIAL:
            return {...state, orderDetailList: []}
        default:
            return state;
    }
}