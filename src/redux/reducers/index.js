import { combineReducers } from 'redux';
import breakingBadQuoteReducer from './breakingBadQuoteReducer';
import quoteCountReducer from './quoteCountReducer';

export default combineReducers({
  breakingBadQuote: breakingBadQuoteReducer,
  quoteCount: quoteCountReducer,
});
