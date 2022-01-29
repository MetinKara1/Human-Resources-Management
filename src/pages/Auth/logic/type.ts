import { AppAction, AppResultAction } from '../../../config/types';

export enum ActionTypes {
    change_name = 'AUTH__CHANGE_NAME',
    change_email = 'AUTH__CHANGE_EMAIL',
    change_password = 'AUTH__CHANGE_PASSWORD',
    change_re_password = 'AUTH__CHANGE_RE_PASSWORD',
    change_phone = 'AUTH__CHANGE_PHONE',

    register = 'AUTH__REGISTER',
    register_result = 'AUTH__REGISTER_RESULT',

    login = 'AUTH__LOGIN',
    login_result = 'AUTH__LOGIN_RESULT',
}

export interface ChangeNameAction extends AppAction {
    type: ActionTypes.change_name;
    name: string;
}
export interface ChangeEmailAction extends AppAction {
    type: ActionTypes.change_email;
    email: string;
}
export interface ChangePasswordAction extends AppAction {
    type: ActionTypes.change_password;
    password: string;
}
export interface ChangeRePasswordAction extends AppAction {
    type: ActionTypes.change_re_password;
    rePassword: string;
}
export interface ChangePhoneAction extends AppAction {
    type: ActionTypes.change_phone;
    phone: string;
}
export interface RegisterResultAction extends AppResultAction {
    type: ActionTypes.register_result;
    hasError: boolean;
}
export interface LoginResultAction extends AppResultAction {
    type: ActionTypes.login_result;
    hasError: boolean;
}

export type Action =
    AppAction
    & AppResultAction
    & ChangeNameAction
    & ChangeEmailAction
    & ChangePasswordAction
    & ChangeRePasswordAction
    & ChangePhoneAction
    & RegisterResultAction
    & LoginResultAction;

export interface State {
    name: string;
    email: string;
    phone: string;
    password: string;
    rePassword: string;
}