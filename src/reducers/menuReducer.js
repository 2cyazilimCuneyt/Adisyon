import { MENU_LIST, MENU_FAILED, MENU_SUCCESS } from '../actions'
    /*  */
    const INITIAL_STATE={
       menus: []
    }
    
    export default (state = INITIAL_STATE, action) => {
        console.log('action--------',action)
        switch (action.type){
          
            case MENU_LIST:
                return {menus: action.payload}
            default:
                return state;
        }
            
    }