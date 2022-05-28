import {
  ADD_ORDER,
  GET_ORDER_LIST,
  GET_ORDER_BY_TABLE_ID,
  UPDATE_ORDER_LIST,
} from '../actions/types';
const INITIAL_STATE = {
  activeOrder: {orderId: 0},
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_ORDER:
      return {...state, activeOrder: action.payload};
    case GET_ORDER_LIST:
      return {...state, activeOrder: action.payload};
    case GET_ORDER_BY_TABLE_ID:
      return {...state, activeOrder: action.payload};
    case UPDATE_ORDER_LIST:
      return {...state, activeOrder: action.payload};
    default:
      return state;
  }
}
