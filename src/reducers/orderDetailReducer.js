import { ORDER_DETAIL } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case ORDER_DETAIL:
            return action.payload
        default:
            return  state;
    }
}