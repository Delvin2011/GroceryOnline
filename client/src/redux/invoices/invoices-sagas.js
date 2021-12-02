import { takeLatest, call, put, all } from "redux-saga/effects"; //it takes every action of a specific type whenever we pass it

import {
  firestore,
  convertInvoicesSnapshotToMap,
} from "../../firebase/firebase.utils";

import { fetchInvoicesSuccess, fetchInvoicesFailure } from "./invoices-actions";

import InvoicesActionTypes from "./invoices-types";

export function* fetchInvoicesAsync() {
  //new user actions request should override previous requets currently being waited upon.
  //yield control of the sagas back to the library. asynchronous requests to the db should not block other fassets of the Appp.
  try {
    const invoiceRef = firestore.collection("shoko-invoices");
    const snapshot = yield invoiceRef.get();
    const invoicesMap = yield call(
      convertInvoicesSnapshotToMap, //call is the effect inside of generator function that invokes the method
      snapshot
    );
    yield put(fetchInvoicesSuccess(invoicesMap));
  } catch (error) {
    yield put(fetchInvoicesFailure(error.message));
  }
}

export function* fetchInvoicesStart() {
  yield takeLatest(
    InvoicesActionTypes.FETCH_INVOICES_START, //action comes thru as fetchCollectionsStart is waiting. onces received it launches fetchCollectionsStartAsync generator function
    fetchInvoicesAsync
  );
}

export function* invoicesSagas() {
  yield all([call(fetchInvoicesStart)]);
}
