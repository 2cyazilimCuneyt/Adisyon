import {TABLE_LIST, ACTIVE_TABLE} from '../actions/types';

const INITIAL_STATE = {
  tables: [],
  activeTable: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TABLE_LIST:
      return {...state, tables: action.payload};
    case ACTIVE_TABLE:
      return {...state, activeTable: action.payload};
    default:
      return state;
  }
};
