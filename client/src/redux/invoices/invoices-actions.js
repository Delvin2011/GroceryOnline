import InvoicesActionTypes from "./invoices-types";
import {
  firestore,
  convertInvoicesSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchInvoicesStart = () => ({
  type: InvoicesActionTypes.FETCH_INVOICES_START,
});

export const fetchInvoicesSuccess = (invoicesMap) => ({
  type: InvoicesActionTypes.FETCH_INVOICES_SUCCESS,
  payload: invoicesMap,
});

export const fetchInvoicesFailure = (erroMessage) => ({
  type: InvoicesActionTypes.FETCH_INVOICES_FAILURE,
  payload: erroMessage,
});

export const fetchInvoicesStartAsync = () => {
  return (dispatch) => {
    //dispatching the moment the function is called
    const invoicesRef = firestore.collection("shoko-invoices");
    dispatch(fetchInvoicesStart()); //will switch the isFetching to true in  shop-reducer

    invoicesRef
      .get()
      .then((snapshot) => {
        console.log(snapshot);
        const invoicesMap = convertInvoicesSnapshotToMap(snapshot); //want to store this in shop reducer
        dispatch(fetchInvoicesSuccess(invoicesMap));
      })
      .catch((error) => dispatch(fetchInvoicesFailure(error.message)));
  };
};
//Thunks are action creator that returns a function that gets the dispatch
