import {
  SIGNIN,
  SigninAction,
  signinSFail,
  signinSuccess,
} from './../actions/auth.action';
import axios from 'axios';
import { API } from '../../config';
import {
  SIGNUP,
  SignupAction,
  signupSuccess,
  signupFail,
} from '../actions/auth.action';
import { put, takeEvery } from 'redux-saga/effects';

import { AxiosResponse } from 'axios';

interface LoginResponse {
  token: string;
  user: { _id: string; name: string; email: string; role: number };
}

function* handleSignup(action: SignupAction) {
  try {
    yield axios.post(`${API}/signup`, action.payload);
    yield put(signupSuccess());
  } catch (error) {
    yield put(signupFail(error.response.data.error));
  }
}

function* handleSignin(action: SigninAction) {
  try {
    // @ts-ignore
    let response = yield axios.post(`${API}/signin`, action.payload);
    localStorage.setItem('jwt', JSON.stringify(response.data));
    yield put(signinSuccess());
  } catch (error) {
    yield put(signinSFail(error.response.data.error));
  }
}

export default function* authSaga() {
  yield takeEvery(SIGNUP, handleSignup);
  yield takeEvery(SIGNIN, handleSignin);
}
