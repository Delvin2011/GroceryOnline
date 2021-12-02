/*utility functions allow us to keep files clean and organize functions that we may need in multiple files in one location */
export const addInvoice = (invoices, invoiceToAdd) => {
  //we will check if the invoice exist
  const existinginvoice = invoices.find(
    (invoice) => invoice.id === invoiceToAdd.id
  );

  if (existinginvoice) {
    return invoices.map((invoice) =>
      invoice.id === invoiceToAdd.id
        ? { ...invoice, quantity: invoice.quantity + 1 }
        : invoice
    );
  }
  //if invoice is not found in the array, we want to return
  // new array with all the existing invoices, but also with the an object invoiceToAdd with a base quantity of 1
  //In this way, any of the subsiquent items will reference the base quantity base value
  return [...invoices, { ...invoiceToAdd, quantity: 1 }];
};
