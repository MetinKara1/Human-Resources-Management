import React from 'react';
import { Provider } from 'react-redux';

import Router from './config/router';
import { store } from './config/store';
import './App.css';


const App: React.FC = () => {
  return (
    <Router />
  );
}

export default () => (
	<Provider store={store}>
		<App />
	</Provider>
)