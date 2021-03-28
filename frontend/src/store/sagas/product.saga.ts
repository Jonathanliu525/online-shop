import {
  getProductSuccess,
  GET_PRODUCT,
  GetProductAction,
} from './../actions/product.action';
import { put, takeEvery } from 'redux-saga/effects';
import { API } from '../../config';
import axios from 'axios';

function* handleGetProduct({ sortBy, order, limit }: GetProductAction) {
  try {
    //@ts-ignore
    const response = yield axios.get<Product[]>(`${API}/products`, {
      params: { sortBy, order, limit },
    });
    yield put(getProductSuccess(response.data, sortBy));
  } catch (error) {}
}

export default function* productSaga() {
  yield takeEvery(GET_PRODUCT, handleGetProduct);
}
