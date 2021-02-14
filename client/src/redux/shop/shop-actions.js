import ShopActionTypes from './shop-types';
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = erroMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: erroMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => { //dispatching the moment the function is called
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart()); //will switch the isFetching to true in  shop-reducer

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot); //want to store this in shop reducer
            dispatch(fetchCollectionsSuccess(collectionsMap));   
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
        
    }

}
//Thunks are action creator that returns a function that gets the dispatch 