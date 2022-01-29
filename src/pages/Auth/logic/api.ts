import axios, { AxiosRequestConfig} from 'axios'

import * as urls from '../../../config/urls';

export const registerApi = async (name: string, email: string, phone: string, password: string) => {
    const config: AxiosRequestConfig = {
        method: 'POST',
        url: 'urls.register_url',
        data: {
            name: name,
            email: email,
            phone: phone,
            password: password
        },
    };
    
    const response = await axios(config);
    return response.data;
}

export const loginApi = async (email: string, password: string) => {
    const config: AxiosRequestConfig = {
        method: 'POST',
        url: 'urls.login_url',
        data: {
            RoleList: email,
            RoleListName: password
        }
    };

    const response = await axios(config);
    return response.data;
}