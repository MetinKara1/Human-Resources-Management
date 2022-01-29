import { all, call, select, put, takeLatest } from 'redux-saga/effects';

import { loginApi, registerApi } from './api';
import { ActionTypes } from './type';
import { registerResult } from './action';

function* registerSaga() {
    const register = yield select(state => state.auth);
    
    try {
        yield call(registerApi, register.name, register.email, register.phone, register.password);
        yield put(registerResult(false));
    } catch(e) {
        yield put(registerResult(true));
    }
}

function* loginSaga() {
    const { email, password } = yield select(state => state.auth);
    try {
        yield call(loginApi, email, password);
    } catch(e) {

    }
}

export default [
    takeLatest(ActionTypes.register, registerSaga),
    takeLatest(ActionTypes.login, loginSaga),
]