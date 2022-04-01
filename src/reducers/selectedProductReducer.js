import { SELECTED_PRODUCT, DESELECTED_PRODUCT } from '../actions/types';

    
    export default (state = {}, action) => {
        switch (action.type){
          
            case SELECTED_PRODUCT:
                return action.payload
            case DESELECTED_PRODUCT:
                return {}
            default:
                return state;
        }
            
    }