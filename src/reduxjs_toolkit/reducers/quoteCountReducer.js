import { createReducer } from '@reduxjs/toolkit';
import { increaseCounter } from '../actions/quoteCountActions';

const quoteCountReducer = createReducer(0, {
  [increaseCounter]: state => state + 1,
});

// const quoteCountReducer = createReducer(0, builder => {
//   builder.addCase(increaseCounter, (state, action) => {
//     console.log(action);
//     state = state + 1;
//   })
// });

export default quoteCountReducer;
