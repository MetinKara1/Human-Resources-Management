import { Action as ReduxAction } from 'redux';

import { ActionTypes as ServiceActionType, State as ServiceState } from '../pages/Services/type';
import { ActionTypes as AuthActionType, State as AuthState } from '../pages/Auth/logic/type';
import { ActionTypes as CandidatesActionType, State as CandidatesState } from '../pages/Candidates/logic/type';

export type AppActionTypes = 
    AuthActionType
    | CandidatesActionType
    | ServiceActionType;

export interface AppState {
    auth: AuthState;
    candidates: CandidatesState;
    service: ServiceState;
}

export interface AppAction extends ReduxAction<AppActionTypes> {}

export interface AppResultAction extends AppAction {
	hasError: boolean;
}