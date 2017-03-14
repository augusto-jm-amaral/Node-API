import * as types from '../constants';

export const changeRoute = (content) => ({
	type: types.CHANGE_ROUTE,
	content
});