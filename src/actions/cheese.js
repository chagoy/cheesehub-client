import { API_BASE_URL } from '../config';

const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST';
const fetchCheeseRequest = () => {
	console.log('inside request');
	return {
		type: FETCH_CHEESE_REQUEST
	}
}

const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS';
const fetchCheeseSuccess = (cheeses) => {
	// console.log(cheeses)
	return {
		type: FETCH_CHEESE_SUCCESS,
		cheeses
	}
}

const FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR';
const fetchCheeseError = (errors) => {
	return {
		type: FETCH_CHEESE_ERROR,
		errors
	}
}

export const fetchCheeses = () => {
	return dispatch => {
		console.log('hello i got called')
		dispatch(fetchCheeseRequest());
		fetch(`${API_BASE_URL}/api/cheeses`)
		.then(response => response.json())
		.then(cheeses => dispatch(fetchCheeseSuccess(cheeses)))
		.catch(error => dispatch(fetchCheeseError()))
	}
}