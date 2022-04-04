import { MENU_LIST } from '../actions/types'
    /*  */
    const INITIAL_STATE={
       menus: null
    }
    
    export default (state = INITIAL_STATE, action) => {
        switch (action.type){
            case MENU_LIST:
                return {...state, menus: action.payload}
            default:
                return state;
        }
        
    }
    