import { AppAction, AppResultAction } from "../../../config/types";

export enum ActionTypes {
  get_candidates = "CANDIDATES__GET_CANDIDATES",
  get_candidates_result = "CANDIDATES__GET_CANDIDATES_RESULT",

  get_candidate_details = "CANDIDATES__GET_CANDIDATE_DETAILS",
  get_candidate_details_result = "CANDIDATES__GET_CANDIDATE_DETAILS_RESULT",
}

export interface GetCandidatesResultAction extends AppResultAction {
  type: ActionTypes.get_candidates_result;
  candidates: any;
  hasError: boolean;
}

export interface GetCandidateDetailsAction extends AppAction {
    type: ActionTypes.get_candidate_details;
    id: string;
  }

export interface GetCandidateDetailsResultAction extends AppResultAction {
  type: ActionTypes.get_candidate_details_result;
  candidateDetails: any;
  hasError: boolean;
}

export type Action = AppAction &
  AppResultAction &
  GetCandidatesResultAction &
  GetCandidateDetailsAction &
  GetCandidateDetailsResultAction;

export interface State {
  candidates: any;
  candidateDetails: any;
}
