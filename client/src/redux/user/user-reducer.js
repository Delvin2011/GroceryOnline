//User reducer, will store the state of the current user.
//The reducer is a function that gets 2 properties, 1. state object that we need to store (last or inital state) 2. An action, an object that has a type - string value.

import  UserActionTypes  from './user-types';

const INITIAL_STATE = {
    currentUser: null,
    error: null
}
const userReducer = (state = INITIAL_STATE, action) => { // if state is undefined, set to state = INITIAL_STATE
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return{
                ...state,
                currentUser: action.payload, //flexible value that we get on the object, setting the current user value with the payload
                error: null //to clear any errors, in the event user get erro and retries successfully
                
            };
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            };
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return{
                ...state,
                error: action.payload //flexible value that we get on the object, setting the current user value with the payload
            };       
        default:
            return state;
    }
}

export default userReducer;
