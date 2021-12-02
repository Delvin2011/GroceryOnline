//handles all the root sagas

import { all, call } from "redux-saga/effects";

import { shopSagas } from "./shop/shop-sagas";
import { userSagas } from "./user/user-sagas";
import { cartSagas } from "./cart/cart-sagas";
import { wishCartSagas } from "./wish/wish-sagas";
import { orderCartSagas } from "./order/order-sagas";
import { invoicesSagas } from "./invoices/invoices-sagas.js";

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(cartSagas),
    call(shopSagas),
    call(wishCartSagas),
    call(orderCartSagas),
    call(invoicesSagas),
  ]); //all handles all sagas. all the code will initialise at the same time.
}
