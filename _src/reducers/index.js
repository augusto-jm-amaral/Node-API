import { ChangeRoute } from './../actions'
import * as types from '../constants'

const initialState = {
	token: ''
}

const appStore = (state = initialState, action) => {
	switch (action.type) {
		case types.CHANGE_ROUTE:
			console.log(state);
			return Object.assign({}, state, action.data)
		default:
			return state
	}
}

export default appStore

