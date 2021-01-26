import { combineReducers } from 'redux';
import breakingBadQuoteReducer from './breakingBadQuoteReducer';
import quoteCountReducer from './quoteCountReducer';
// import breakingBadQuoteSlice from '../feature/breakingBadQuote';
// import quoteCountSlice from '../feature/quoteCountSlice';

export default combineReducers({
  breakingBadQuote: breakingBadQuoteReducer,
  quoteCount: quoteCountReducer,
  // breakingBadQuote: breakingBadQuoteSlice.reducer,
  // quoteCount: quoteCountSlice.reducer,
});
