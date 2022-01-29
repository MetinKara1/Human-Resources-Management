import axios, { AxiosRequestConfig} from 'axios'

import * as urls from '../../../config/urls';

export const candidatesApi = async () => {
    const config: AxiosRequestConfig = {
        method: 'GET',
        url: urls.get_candidates,
        data: {}
    };

    const response = await axios(config);
    console.log('json dataaaaaa: ', response);
    return response.data;
}

export const candidateDetailApi = async (id: string) => {
    const config: AxiosRequestConfig = {
        method: 'GET',
        url: `${urls.get_candidates}/${id}`,
        data: {}
    };

    const response = await axios(config);
    console.log('json dataaaaaa: ', response);
    return response.data;
}