import {
  GET_QUOTE_SUCCESS,
  GET_QUOTE_REQUEST,
  GET_QUOTE_FAILURE,
} from '../types';

const initialState = {
  loading: false,
  data: {},
  error: '',
};

const breakingBadQuoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTE_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      }
    case GET_QUOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      }
    case GET_QUOTE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state;
  }
};

export default breakingBadQuoteReducer;
