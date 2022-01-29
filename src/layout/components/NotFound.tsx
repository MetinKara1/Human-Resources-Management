import React from 'react';

import { navigate } from '../../pages/Services/action';
import { useDispatch } from '../../config/store';

const NotFound = () => {
	const dispatch = useDispatch();

	return (
		<div id="notfound">
			<div className="notfound">
				<div className="notfound-404">
					<h3>Hata</h3>
					<h1><span>4</span><span>0</span><span>4</span></h1>
				</div>
				<h2>Sayfa bulunamadı.</h2>
			</div>
		</div>
	);
};

export default NotFound;
