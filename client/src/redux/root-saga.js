//handles all the root sagas

import { all, call } from 'redux-saga/effects';

import { shopSagas } from './shop/shop-sagas';
import { userSagas } from './user/user-sagas';
import { cartSagas } from './cart/cart-sagas';
//import { decoCartSagas } from './decoCart/decoCart-sagas';

export default function* rootSaga() {
  yield all([call(userSagas),call(cartSagas),call(shopSagas)]);//all handles all sagas. all the code will initialise at the same time.
}
