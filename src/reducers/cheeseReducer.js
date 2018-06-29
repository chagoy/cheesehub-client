const initialState = {
	cheeses: [],
	loading: false,
	errors: null
}

const cheeseReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'FETCH_CHEESE_REQUEST':
			return {
				...state, loading: true, errors: null
			}
		case 'FETCH_CHEESE_SUCCESS':
			console.log(action.cheeses);
			return {
				...state,
				loading: false,
				cheeses: action.cheeses
			}
		case 'FETCH_CHEESE_ERROR':
			return {
				...state,
				loading: false,
				errors: action.errors
			}
	}
	return state;
}

export default cheeseReducer;