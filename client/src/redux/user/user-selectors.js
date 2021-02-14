//input selector is a function that gets the whole state and returns a slice of it.
import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser //outputs of the input selectors
);

export const selectCurrentUserLoginError = createSelector(
  [selectUser],
  user => user.error //outputs of the input selectors
);
