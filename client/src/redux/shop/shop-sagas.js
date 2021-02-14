import { takeLatest, call, put, all } from 'redux-saga/effects';//it takes every action of a specific type whenever we pass it

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop-actions';

import ShopActionTypes from './shop-types';

export function* fetchCollectionsAsync() {
//new user actions request should override previous requets currently being waited upon.
//yield control of the sagas back to the library. asynchronous requests to the db should not block other fassets of the Appp.
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap, //call is the effect inside of generator function that invokes the method
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,//action comes thru as fetchCollectionsStart is waiting. onces received it launches fetchCollectionsStartAsync generator function
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
