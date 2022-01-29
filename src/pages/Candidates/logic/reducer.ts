import { Reducer } from "redux";

import { Action, ActionTypes, State } from "./type";

const initialState: State = {
  name: "",
  email: "",
  phone: "",
  password: "",
  rePassword: "",
  candidates: [],
  candidateDetails: {},
};

const candidates: Reducer<State, Action> = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case ActionTypes.get_candidates_result:
      return {
        ...state,
        candidates: action.candidates,
      };

    case ActionTypes.get_candidate_details_result:
      console.log("geldiiiiiiiii", action);
      return {
        ...state,
        candidateDetails: action.candidateDetails,
      };

    default:
      return state;
  }
};
export default candidates;
