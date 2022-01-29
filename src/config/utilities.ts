import moment from 'moment';

export const formatDate = (date: Date | string | undefined, withTime: boolean = false) => {
	if (!date) return '';
	return moment(date).format(`iDD iMMMM iYYYY الموافق DD MMMM YYYY${withTime ? ' HH:mm' : ''}`);
};