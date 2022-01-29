import { Reducer } from 'redux';

import { Action, ActionTypes, State } from './type';

const initialState: State = {
    name: '',
    email: '',
    phone: '',
    password: '',
    rePassword: ''
}

const auth: Reducer<State, Action> = (state = initialState, action: any) => {
    switch (action.type) {
        case ActionTypes.change_name:
            return {
                ...state,
                name: action.name,
            }
            
        case ActionTypes.change_email:
            return {
                ...state,
                email: action.email,
            }
            
        case ActionTypes.change_phone:
            return {
                ...state,
                phone: action.phone,
            }
                    
        case ActionTypes.change_password:
            return {
                ...state,
                password: action.password,
            }
        
        case ActionTypes.change_re_password:
            return {
                ...state,
                rePassword: action.rePassword,
            }

            default:
                return state;
    }
}
export default auth;