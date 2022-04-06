import { TABLE_LIST } from '../actions/types';

const INITIAL_STATE = {
    tables:[]
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case TABLE_LIST:
            return {...state, tables: action.payload}
        default:
            return state;
    }
}