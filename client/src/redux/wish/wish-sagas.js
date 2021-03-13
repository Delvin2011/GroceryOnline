import { all, call, takeLatest, put, select } from "redux-saga/effects";
import { getUserWishCartRef } from "../../firebase/firebase.utils";
import UserActionTypes from "../user/user-types";
import { selectCurrentUser } from "../user/user-selectors";
import { clearWishCart, setWishCartFromFirebase } from "./wish-actions";
import { selectWishCartItems } from "./wish-selectors";
import WishActionTypes from "./wish-type";

export function* clearWishCartOnSignOut() {
  yield put(clearWishCart());
}

export function* updateWishCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserWishCartRef(currentUser.id);
      const cartItems = yield select(selectWishCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* checkWishCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserWishCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setWishCartFromFirebase(cartSnapshot.data().cartItems));
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearWishCartOnSignOut);
}

export function* onUserSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkWishCartFromFirebase);
}

export function* onWishCartChange() {
  yield takeLatest(
    [
      WishActionTypes.ADD_WISHITEM,
      WishActionTypes.REMOVE_WISHITEM,
      WishActionTypes.CLEAR_WISHITEM_FROM_WISHCART,
    ],
    updateWishCartInFirebase
  );
}

export function* wishCartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onWishCartChange),
    call(onUserSignIn),
  ]);
}
