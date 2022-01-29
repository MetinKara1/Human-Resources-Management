import { all, call, select, put, takeLatest } from "redux-saga/effects";

import { candidatesApi, candidateDetailApi } from "./api";
import { ActionTypes } from "./type";
import { getCandidatesResult, getCandidateDetailsResult } from "./action";

// function* registerSaga() {
//     const register = yield select(state => state.auth);

//     try {
//         yield call(registerApi, register.name, register.email, register.phone, register.password);
//         yield put(registerResult(false));
//     } catch(e) {
//         yield put(registerResult(true));
//     }
// }

function* candidatesSaga() {
  try {
    const data = yield call(candidatesApi);
    yield put(getCandidatesResult(data, false));
  } catch (e) {
    return getCandidatesResult(null, true);
  }
}

function* candidateDetailSaga(candidateItem: any) {
  console.log("run thisss");
  try {
    // const { id } = yield select((state) => state.candidates);
    console.log('idddddd: ', candidateItem.id);
    const data = yield call(candidateDetailApi, candidateItem.id);
    yield put(getCandidateDetailsResult(data, false));
  } catch (e) {
    return getCandidateDetailsResult(null, true);
  }
}

export default [
  takeLatest(ActionTypes.get_candidates, candidatesSaga),
  takeLatest(ActionTypes.get_candidate_details, candidateDetailSaga),
];
