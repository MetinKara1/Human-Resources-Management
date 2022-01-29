import { NavigateAction, ActionTypes } from './type';
import { RouteName, history, routes } from '../../config/router';

export const navigate = (routeName: RouteName, ...options: string[]): NavigateAction => {
    console.log('routeName: ', routeName);
    console.log('options: ', ...options);
    const path = options.reduce((previousValue, currentValue) => previousValue.concat(`/${currentValue}`), routes[routeName].path);
    history.push(path);
    console.log('path: ', routes[routeName].path);
    return {
        type: ActionTypes.navigate,
        routeName,
    };
};

export const replace = (routeName: RouteName, ...options: string[]): NavigateAction => {
	const path = options.reduce((previousValue, currentValue) => previousValue.concat(`/${currentValue}`), routes[routeName].path);
	history.replace(path);

	return {
		type: ActionTypes.navigate,
		routeName,
	};
};
