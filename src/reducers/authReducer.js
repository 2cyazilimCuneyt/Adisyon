import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, LOGIN_REMEMBER_ME } from '../actions/types'

    const INITIAL_STATE={
        email: '',
        password:'',
        loading: false,
        isRemembered: ''
    }
    
    export default (state = INITIAL_STATE, action) => {
        switch (action.type){
            case EMAIL_CHANGED:
                return { ...state, email: action.payload};
            case PASSWORD_CHANGED:
                return { ...state, password: action.payload};
            case LOGIN:
                return { ...state, loading: true};
            case LOGIN_USER_SUCCESS:
                return { ...state, loading: false };
            case LOGIN_USER_FAILED:
                return { ...state, loading: false };
            case LOGIN_REMEMBER_ME:
                return {...state, isRemembered: action.payload}
            default:
                return state;
        }
           
    }