import InvoicesActionTypes from "./invoices-types";
import { addInvoice } from "./invoices-utils";

const INITIAL_STATE = {
  invoices: null,
  isFetchingInvoices: false, //whether or not we are fetching data for our collections property
};

const invoicesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case InvoicesActionTypes.FETCH_INVOICES_START:
      return {
        ...state,
        isFetchingInvoices: true,
      };
    case InvoicesActionTypes.FETCH_INVOICES_SUCCESS:
      return {
        //once API call is successfully, update isFetching
        ...state,
        isFetchingInvoices: false,
        invoices: action.payload,
      };
    case InvoicesActionTypes.FETCH_INVOICES_FAILURE:
      return {
        ...state,
        isFetchingInvoices: false,
        erroMessage: action.payload,
      };
    case InvoicesActionTypes.ADD_INVOICE:
      return {
        ...state,
        invoices: addInvoice(state.invoices, action.payload), //add new invoice to the existing list
      };
    default:
      return state;
  }
};

export default invoicesReducer;
