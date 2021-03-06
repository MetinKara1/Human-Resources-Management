import { all, call, select, put, takeLatest } from "redux-saga/effects";

import { candidatesApi, candidateDetailApi } from "./api";
import { ActionTypes } from "./type";
import { getCandidatesResult, getCandidateDetailsResult } from "./action";

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
