import { all, call, takeLatest, put, select } from "redux-saga/effects";
import { getUserOrderCartRef } from "../../firebase/firebase.utils";
import UserActionTypes from "../user/user-types";
import { selectCurrentUser } from "../user/user-selectors";
import { clearOrderCart, setOrderCartFromFirebase } from "./order-actions";
import { selectOrderCartItems } from "./order-selectors";
import OrderActionTypes from "./order-type";

export function* clearOrderCartOnSignOut() {
  yield put(clearOrderCart());
}

export function* updateOrderCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserOrderCartRef(currentUser.id);
      const cartItems = yield select(selectOrderCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* checkOrderCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserOrderCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setOrderCartFromFirebase(cartSnapshot.data().cartItems));
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearOrderCartOnSignOut);
}

export function* onUserSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkOrderCartFromFirebase);
}

export function* onOrderCartChange() {
  yield takeLatest(
    [
      OrderActionTypes.ADD_ORDERITEM,
      OrderActionTypes.REMOVE_ORDERITEM,
      OrderActionTypes.CLEAR_ORDERITEM_FROM_ORDERCART,
    ],
    updateOrderCartInFirebase
  );
}

export function* orderCartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onOrderCartChange),
    call(onUserSignIn),
  ]);
}
