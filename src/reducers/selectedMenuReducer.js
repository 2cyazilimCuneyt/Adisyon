import { SELECTED_MENU, DESELECTED_MENU } from '../actions/types';

    
    export default (state = {}, action) => {
        switch (action.type){
          
            case SELECTED_MENU:
                return action.payload
            case DESELECTED_MENU:
                return {}
            default:
                return state;
        }
            
    }