import {TABLE_LIST} from '../actions/types';

const INITIAL_STATE = {
    roomId: 0,
    name: "pariatur commodo veniam dolor occaecat",
    description: "velit id occaecat sed",
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