import { applyMiddleware, compose, createStore, Dispatch, Middleware } from 'redux';
import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { createLogger } from 'redux-logger';

import { AppAction, AppState } from './types';
import reducers from '../config/reducers';
import rootSaga from '../config/sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewareList: Middleware[] = [sagaMiddleware];
if(process.env.NODE_ENV === 'development'){
    middlewareList.push(createLogger());
}

const enhancers = [applyMiddleware(...middlewareList)];
const initialState = { 
    storage: {

    },
};
const str = createStore(reducers, compose(...enhancers));
sagaMiddleware.run(rootSaga);

export const store = str;

export const useDispatch = (): Dispatch<AppAction> => useReduxDispatch();
export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

store.subscribe(() => {

});

