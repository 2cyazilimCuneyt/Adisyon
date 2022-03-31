import { MENU_LIST, MENU_FAILED, MENU_SUCCESS } from '../actions/types'
    /*  */
    const INITIAL_STATE={
       menus: null
    }
    
    export default (state = INITIAL_STATE, action) => {
        console.log("&&&&&&&&&&&&&&",MENU_LIST,action.type);
        switch (action.type){
            case MENU_LIST:
                return {...state, menus: action.payload}
            default:
                return state;
        }
        
    }
    