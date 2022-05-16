import {TABLE_STATUS} from '../actions/types';

const INITIAL_STATE = {
  roomId: 0,
  tableId: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TABLE_STATUS:
      return state;
    default:
      return state;
  }
};
