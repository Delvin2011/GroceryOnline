import { createSelector } from "reselect";

const selectInvoices = (state) => state.invoices;

export const selectInvoiceLists = createSelector(
  [selectInvoices], //input (takes in)
  (invoices) => invoices.invoiceList //output
);

export const selectInvoicesForPreview = createSelector(
  [selectInvoiceLists],
  (invoiceList) =>
    invoiceList ? Object.keys(invoiceList).map((key) => invoiceList[key]) : [] //returning mens, womes, hats etc if the collections is not empty
  //const test = {a:1, b:2, c:3} => Object.keys(test) => ["a", "b", "c"]
);
export const selectInvoiceList = (collectionUrlParam) =>
  createSelector(
    [selectInvoiceLists],
    //find collection.id matching the url parameter of our collection id map
    (invoiceList) => (invoiceList ? invoiceList[collectionUrlParam] : null) //passing URL into our selector and our selector goes into the new collections objects and gets the correspondning value
  );

//bcoz e are using an object, and we are using the object bcoz the URL parameter is a string and the id we want to match is a number
//so we write a map, which is an object where the string value goes to the id
//we then map over the collections, by selecting it and passing into our new select collection via collectionUrlParam
//Which in return, createSelector (curryed function) which is a function that returns another function

export const selectIsInvoicesFetching = createSelector(
  [selectInvoices],
  (invoices) => invoices.isFetching
);

//checks to see if collections are loaded
//if no collections, cillectionsLoaded is false
export const selectIsInvoicesLoaded = createSelector(
  [selectInvoices],
  (invoices) => !!invoices.invoiceList //if our collections is loaded we get tru, otherwise false
);
