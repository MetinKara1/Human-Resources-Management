import { Action as ReduxAction } from 'redux';

import { AppAction, AppResultAction } from '../../config/types';
import { RouteName } from '../../config/router';

export enum ActionTypes {
    navigate = 'SERVICE__NAVIGATE'
}

export interface NavigateAction extends AppAction {
    type: ActionTypes.navigate;
    routeName: RouteName;
}

// Alert
export type AlertType = 'error' | 'success' | 'warn';

export type Action =
    AppAction
    & AppResultAction
    & NavigateAction;

export interface State {
    alert: {
		visible: boolean,
		type: AlertType,
		message: string,
    },
    isModalVisible: boolean;
}
