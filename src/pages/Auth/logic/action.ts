import { ActionTypes,
     ChangeNameAction, 
     ChangeEmailAction, 
     ChangePhoneAction, 
     ChangePasswordAction,
     ChangeRePasswordAction, 
     RegisterResultAction
} from "./type";

export const changeName = (name: string): ChangeNameAction => ({
    type: ActionTypes.change_name,
    name,
});

export const changeEmail = (email: string): ChangeEmailAction => ({
    type: ActionTypes.change_email,
    email,
});

export const changePhone = (phone: string): ChangePhoneAction => ({
    type: ActionTypes.change_phone,
    phone,
});

export const changePassword = (password: string): ChangePasswordAction => ({
    type: ActionTypes.change_password,
    password,
});

export const changeRePassword = (rePassword: string): ChangeRePasswordAction => ({
    type: ActionTypes.change_re_password,
    rePassword,
});

export const register = () => ({
    type: ActionTypes.register,
});
export const registerResult = (hasError: boolean): RegisterResultAction => ({
    type: ActionTypes.register_result,
    hasError
});

export const login = () => ({
    type: ActionTypes.login,
});