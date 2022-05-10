import {ADD_ORDER, GET_ORDER_LIST} from '../actions/types';
const INITIAL_STATE = {
  activeOrder: {},
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_ORDER:
      return {...state, activeOrder: action.payload};
    case GET_ORDER_LIST:
      return {...state, activeOrder: action.payload};
    default:
      return state;
  }
}
