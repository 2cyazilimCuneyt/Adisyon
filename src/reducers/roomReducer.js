import {ROOM_LIST, ACTIVE_ROOM} from '../actions/types';

const INITIAL_STATE = {
  rooms: [],
  activeRoom: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ROOM_LIST:
      return {...state, rooms: action.payload};
    case ACTIVE_ROOM:
      return {...state, activeRoom: action.payload};
    default:
      return state;
  }
};
