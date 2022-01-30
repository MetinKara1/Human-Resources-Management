import { Action as ReduxAction } from 'redux';

import { ActionTypes as ServiceActionType, State as ServiceState } from '../pages/Services/type';
import { ActionTypes as CandidatesActionType, State as CandidatesState } from '../pages/Candidates/logic/type';

export type AppActionTypes = 
    CandidatesActionType
    | ServiceActionType;

export interface AppState {
    candidates: CandidatesState;
    service: ServiceState;
}

export interface AppAction extends ReduxAction<AppActionTypes> {}

export interface AppResultAction extends AppAction {
	hasError: boolean;
}