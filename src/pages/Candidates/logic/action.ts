
import { ActionTypes,
     GetCandidatesResultAction,
     GetCandidateDetailsAction,
     GetCandidateDetailsResultAction
} from "./type";

export const getCandidates = () => ({
    type: ActionTypes.get_candidates,
});
export const getCandidatesResult = (candidates: any, hasError: boolean): GetCandidatesResultAction => ({
    type: ActionTypes.get_candidates_result,
    candidates,
    hasError
});

export const getCandidateDetails = (id: string): GetCandidateDetailsAction => ({
    type: ActionTypes.get_candidate_details,
    id
});
export const getCandidateDetailsResult = (candidateDetails: any, hasError: boolean): GetCandidateDetailsResultAction => ({
    type: ActionTypes.get_candidate_details_result,
    candidateDetails,
    hasError
});