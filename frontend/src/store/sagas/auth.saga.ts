import axios from 'axios';
import { API } from '../../config';
import {
  SIGNUP,
  SignupAction,
  signupSuccess,
  signupFail,
} from '../actions/auth.action';
import { put, takeEvery } from 'redux-saga/effects';

function* handleSignup(action: SignupAction) {
  try {
    yield axios.post(`${API}/signup`, action.payload);
    yield put(signupSuccess());
  } catch (error) {
    yield put(signupFail(error.response.data.error));
  }
}

export default function* authSaga() {
  yield takeEvery(SIGNUP, handleSignup);
}
