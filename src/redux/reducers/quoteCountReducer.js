import {
  QUOTE_COUNT,
} from '../types';

const initialState = 0;

const quoteCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUOTE_COUNT:
      console.log(state);
      return state + 1;
    default:
      return state;
  }
};

export default quoteCountReducer;
