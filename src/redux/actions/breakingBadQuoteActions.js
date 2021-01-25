import {
  GET_QUOTE_REQUEST,
  GET_QUOTE_SUCCESS,
  GET_QUOTE_FAILURE,
} from '../types';

export const getQuote = () => {
  return async dispatch => {
    dispatch({
      type: GET_QUOTE_REQUEST
    });

    try {
      const response = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
      const data = await response.json();
      
      dispatch({
        type: GET_QUOTE_SUCCESS,
        payload: data[0]
      });

    } catch (error) {
      dispatch({
        type: GET_QUOTE_FAILURE,
        payload: error
      });
    }
  };
};
