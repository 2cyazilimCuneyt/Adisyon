import {ADD_ORDER_DETAIL_LIST, ORDER_DETAIL_INITIAL} from '../actions/types';

const INITIAL_STATE = {
    orderDetailList: []
}

export default (state= INITIAL_STATE, action) => {
    console.log('ADD_ORDER_DETAIL_LIST123343------->', ORDER_DETAIL_INITIAL, action.payload);
    switch (action.type) {
        case ADD_ORDER_DETAIL_LIST:
            return {...state, orderDetailList: [...state.orderDetailList, action.payload]}
        case ORDER_DETAIL_INITIAL:
            return {...state, orderDetailList: [] }
        default:
            return state;
    }
}