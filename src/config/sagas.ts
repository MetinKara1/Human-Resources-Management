import { all } from 'redux-saga/effects';

import AuthSaga from '../pages/Auth/logic/saga';
import CandidatesSaga from '../pages/Candidates/logic/saga';

export default function* () {
    yield all([
        ...AuthSaga,
        ...CandidatesSaga
    ]);
}