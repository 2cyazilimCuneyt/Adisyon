import { PRODUCT_LIST } from '../actions/types';

const INITIAL_STATE={
    products: null
 }
 
 export default (state = INITIAL_STATE, action) => {
     console.log("&&&&&&&&&&&&&&",PRODUCT_LIST,action.type);
     switch (action.type){
         case PRODUCT_LIST:
             return {...state, products: action.payload}
         default:
             return state;
     }
     
 }