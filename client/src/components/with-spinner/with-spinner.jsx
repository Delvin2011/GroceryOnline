import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner-styles';

const WithSpinner = WrappedComponent => {

   const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
            <WrappedComponent {...otherProps} />
    );
};

return Spinner;

};

export default WithSpinner;
//takes a component WrappedComponent as an argument and return Spinner
 // Loading state, when the backend hasn't given reponse with the shop data - Need to use loading spinner for the mean time

 /*Making a new withSpinner high order component that takes WrappedComponent that we want to rap with the functionality of our spinner loading feature.
 - The WrappedComponent gets passed into the new component that wraps around the component below.
 - it detremines based on the isLoading property that gets passed the component. If its loading, render the SpinnerOverlay and if false, render WrappedComponent
 - isLoading is a true false value that gets dertemined by some outside logic, contained in the shop page
 - Shop page knows when the shop data finishes loading*/