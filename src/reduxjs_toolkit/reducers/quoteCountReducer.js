import { createReducer } from '@reduxjs/toolkit';
import { increaseCounter } from '../actions/quoteCountActions';

const quoteCountReducer = createReducer(0, {
  [increaseCounter.toString()]: state => state + 1,
});

export default quoteCountReducer;
