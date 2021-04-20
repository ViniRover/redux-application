import { AxiosResponse } from 'axios';
import {
  all,
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects';
import { State } from '../..';
import { api } from '../../../services/api';
import { addProductToCartFailed, addProductToCartRequest, addProductToCartSuccess } from './actions';

type CheckStockRequest = ReturnType<typeof addProductToCartRequest>;

interface StockResponse {
  id: number;
  quantity: number;
}

function* checkProductStock({ payload }: CheckStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: State) => {
    return (
      state.cart.items.find(item => item.product.id === product.id)?.quantity ??
      0
    );
  });

  const availableStockResponse: AxiosResponse<StockResponse> = yield call(
    api.get,
    `stock/${product.id}`
  );

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailed(product.id));
  }
}

export default all([
  takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductStock),
]);
