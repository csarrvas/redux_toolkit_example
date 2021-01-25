import { combineReducers } from 'redux';
import breakingBadQuoteSlice from '../feature/breakingBadQuote';
// import breakingBadQuoteReducer from '../../redux/reducers/breakingBadQuoteReducer';
// import quoteCountReducer from './quoteCountReducer';
import quoteCountSlice from '../feature/quoteCountSlice';

export default combineReducers({
  // breakingBadQuote: breakingBadQuoteReducer,
  breakingBadQuote: breakingBadQuoteSlice.reducer,
  // quoteCount: quoteCountReducer,
  quoteCount: quoteCountSlice.reducer,
});
