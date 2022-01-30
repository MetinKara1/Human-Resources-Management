import { all } from 'redux-saga/effects';

import CandidatesSaga from '../pages/Candidates/logic/saga';

export default function* () {
    yield all([
        ...CandidatesSaga
    ]);
}