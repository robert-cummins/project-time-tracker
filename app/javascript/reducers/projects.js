import { GET_PROJECTS } from "../actions"

const initialState = {
	list: []
};

export default function projectReducer(state = initialState, action) {
	switch (action.type) {
		case GET_PROJECTS:
			return {
				list: action.payload,
			};

		default:
			return state;
	}
}

