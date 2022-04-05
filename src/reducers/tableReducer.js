import { TABLE_LIST } from '../actions/types';

const INITIAL_STATE = {
    tables:[]
}

export default (state=INITIAL_STATE, action) => {
    console.log('tablesssssssssssss', TABLE_LIST, action.type)
    switch (action.type) {
        case TABLE_LIST:
            return {...state, tables: action.payload}
        default:
            return state;
    }
}