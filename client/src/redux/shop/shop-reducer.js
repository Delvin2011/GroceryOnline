//import SHOP_DATA from './shopData'; we don't need the shop data from the front end any more
import ShopActionTypes from './shop-types';

const INITIAL_STATE = {
    collections: null,
    isFetching: false, //whether or not we are fetching data for our collections property
    erroMessage: undefined
};


const shopReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true //indicating to the reducer where isFetching is true
            }

        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return{ //once API call is successfully, update isFetching
                ...state,
                isFetching: false,
                collections: action.payload
            }

        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return{
                ...state,
                isFetching:false,
                erroMessage: action.payload

            }
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload //reducer waiting for the backend update
            };
        default:
            return state;
    } 
 };
 
 export default shopReducer;