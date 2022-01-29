import React, { useEffect, useState } from 'react';

interface Props {
	visible: boolean;
	type: 'success' | 'error' | 'warn';
	message: string;
	modal?: boolean
}

const Alert = (props: Props) => {
	const { visible, type, message, modal = false } = props;

	const [firstWord, setFirstWord] = useState('');
	const [restMessage, setRestMessage] = useState('');
	useEffect(() => {
		const wordList = message.split(' ');
		setFirstWord(wordList[0]);
		wordList.shift();
		setRestMessage(wordList.reduce((previousValue, currentValue) => previousValue.concat(' ' + currentValue), ''));
	}, [message]);

	if (!visible) return <div />;

	return (
		<div className={modal ? 'alert-wrapper alert-wrapper-modal' : 'alert-wrapper'}>
			{<div id='div'
			      className={type === 'success' ? 'alert-accept' : type === 'error' ? (modal ? 'alert-warning alert-warning-modal' : 'alert-warning') : 'alert-exclamation'}>
				<span id='span-id'>
					<i className={type === 'success' ? 'fas fa-check-circle' : type === 'error' ? 'fas fa-times-circle' : 'fas fa-exclamation-circle'} />
				</span>
				&nbsp;
				<strong>{firstWord}</strong>
				<span id='message'>{restMessage}</span>
			</div>}
		</div>
	);
};

export default Alert;
