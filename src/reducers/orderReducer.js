import { ADD_ORDER, ACTIVE_ORDER} from '../actions/types';
const INITIAL_STATE = {
    activeOrder: {}
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_ORDER:
            return {...state, activeOrder:action.payload};
        case ACTIVE_ORDER:
            return {...state, activeOrder: action.payload }
        default:
            return state
    }
}