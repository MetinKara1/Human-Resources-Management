declare module 'react-router-modal' {
	import React from 'react';

	type Match = { url: string, params: any }

	interface ModalContainerProps {
		containerClassName?: string;
		backdropClassName?: string;
		backdropInClassName?: string;
		backdropOutClassName?: string;
		modalClassName?: string;
		modalInClassName?: string;
		modalOutClassName?: string;
		wrapperClassName?: string;
		outDelay?: number;
		bodyModalOpenClassName?: string;
		onLastModalUnmounted?: Function;
		onFirstModalMounted?: Function;
		autoRestoreScrollPosition?: boolean;
		children?: any;
	}

	interface ModalRouteProps {
		match?: Match;
		history?: any;
		onBackdropClick?: () => void;
		path: string;
		children?: any;
		component?: any;
		exact?: boolean;
		props?: Object;
		className?: string;
		parentPath?: string | ((match: Match) => string);
		backdropClassName?: string;
		backdropInClassName?: string;
		backdropOutClassName?: string;
		inClassName?: string;
		outClassName?: string;
		outDelay?: number;
	}

	interface ModalProps {
		component?: any;
		children?: any;
		props?: Object;
		stackOrder?: number;
		className?: string;
		inClassName?: string;
		outClassName?: string;
		backdropClassName?: string;
		backdropInClassName?: string;
		backdropOutClassName?: string;
		outDelay?: number;
		onBackdropClick?: () => void;
	}

	export class ModalContainer extends React.Component<ModalContainerProps> {

	}

	export class ModalRoute extends React.Component<ModalRouteProps> {

	}

	export class Modal extends React.Component<ModalProps> {

	}
}