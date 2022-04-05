import {ROOM_LIST} from '../actions/types';

const INITIAL_STATE = {
    rooms:[]
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ROOM_LIST:
            return {...state, rooms:action.payload};
        default:
            return state;
    }
}