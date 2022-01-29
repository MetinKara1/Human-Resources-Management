import { combineReducers } from 'redux';

import auth from '../pages/Auth/logic/reducer';
import candidates from '../pages/Candidates/logic/reducer';

export default combineReducers({
    auth,
    candidates
});