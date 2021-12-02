const InvoicesActionTypes = {
  //setting up multiple states that our shop actions could be in as far as fetching the asynchronous data goes
  FETCH_INVOICES_START: "FETCH_INVOICES_START", //telling redux we are starting to fetch the data i.e that is b4 any data gets fetched. 1st API call to our functions begins
  FETCH_INVOICES_SUCCESS: "FETCH_INVOICES_SUCCESS", //when API call returns successfull. Whne the data that we want is returned.
  FETCH_INVOICES_FAILURE: "FETCH_INVOICES_FAILURE",
  ADD_INVOICE: "ADD_INVOICE",
};

export default InvoicesActionTypes;
