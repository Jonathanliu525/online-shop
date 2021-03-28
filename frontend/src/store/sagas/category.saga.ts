import { Category } from './../models/category';

import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { API } from '../../config';
import {
  GET_CATEGORY,
  GetCategoryAction,
  getCategorySuccess,
} from './../actions/category.action';

function* handleGetCategory(action: GetCategoryAction) {
  try {
    //@ts-ignore
    const response = yield axios.get<Category[]>(`${API}/categories`);
    yield put(getCategorySuccess(response.data));
  } catch (error) {}
}

export default function* categorySaga() {
  yield takeEvery(GET_CATEGORY, handleGetCategory);
}
