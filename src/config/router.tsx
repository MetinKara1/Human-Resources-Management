import React, { useMemo } from 'react';
import { Route, Router as BrowserRouter, Switch } from 'react-router-dom';
import { mapIn } from 'redux-immutable-helper';
import { createBrowserHistory } from 'history';
import { ModalContainer, ModalRoute } from 'react-router-modal';

import '../config/styles.css';

import Layout from '../layout/Layout';
import Login from '../pages/Auth/views/Login';
import Register from '../pages/Auth/views/Register';

import Home from '../pages/Home/views/Home';
import Candidates from '../pages/Candidates/views/Candidates';
import CandidateDetail from '../pages/Candidates/views/CandidateDetail';
import AboutUs from '../pages/AboutUs/AboutUs';

import NotFound from '../layout/components/NotFound';

export const history = createBrowserHistory();

export type RouteName =
	| 'Home'
	| 'Login'
	| 'Register'
	| 'Candidates'
	| 'CandidateDetail'
	| 'AboutUs';

interface IRoute {
	path: string;
	params?: string;
	component: any;
	exact?: boolean;
	isModal?: boolean;
	parentPath?: string;
}

const _routes = {
	// Auth
	Login: {
		path: '/account/login',
		component: Login,
		exact: true,
	},
	Register: {
		path: '/account/Register',
		component: Register,
		exact: true
	},

	// Home
	Home: {
		path: '/',
		component: Home,
		exact: true
	},

	// Candidates
	Candidates: {
		path: '/candidates',
		component: Candidates,
		exact: true
	},
	CandidateDetail: {
		path: '/candidates',
		component: CandidateDetail,
		params: '/:id',
		exact: true,
		parentPath: '/candidates'
	},
	AboutUs: {
		path: '/aboutUs',
		component: AboutUs,
		exact: true
	},
};

export const routes: { [key: string]: IRoute } = _routes;

export default () => {
	const onNavigateParentPath = (parentPath: string | undefined) => () => {
		if (!parentPath)
			return;
		console.log('history replace runnnn');
		history.replace(parentPath);
	};

	const renderPages = useMemo(
		() =>
			Object.values(routes)
				.filter(value => !value.isModal)
				.map(({ path, params, component, exact }, index) => {
					console.log('params: ', params);
					console.log('component: ', component);

					return (
					<Route
						key={index}
						path={path.concat(params || '')}
						component={() => (
							<Layout
								layoutOptions={component.layoutOptions || {}}
								Component={component}
							/>
						)}
						exact={exact}
					/>
				)}),
		[],
	);

	const renderModals = useMemo(
		() =>
			Object.values(routes)
				.filter(value => value.isModal)
				.map(({ path, parentPath, params, component, exact }, index) => (
					<ModalRoute
						key={index}
						path={path.concat(params || '')}
						parentPath={parentPath}
						component={() => (
							<Layout
								layoutOptions={component.layoutOptions || {}}
								Component={component}
							/>
						)}
						exact={exact}
						history={history}
						className='react-router-custom-modal'
						inClassName='react-router-custom-modal-in'
						outClassName='react-router-custom-modal-out'
						backdropClassName='react-router-custom-backdrop'
						backdropInClassName='react-router-custom-backdrop-in'
						backdropOutClassName='react-router-custom-backdrop-out'
						onBackdropClick={onNavigateParentPath(parentPath)}
						outDelay={300}
					/>
				)),
		[],
	);

	return (
		<BrowserRouter history={history}>
			<Switch>
				{renderPages}
				<Route path='/*' component={NotFound} />
			</Switch>
			{renderModals}
			<ModalContainer />
		</BrowserRouter>
	);
};


// export const getRoutePath = (routeName?: RouteName) => {
// 	return routeName ? routes[routeName].path : '';
// };