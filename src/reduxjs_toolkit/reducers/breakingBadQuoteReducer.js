import { createReducer } from '@reduxjs/toolkit';
import { getQuote } from '../actions/breakingBadQuoteActions';

const initialState = {
  loading: false,
  data: {},
  error: '',
}

const breakingBadQuoteReducer = createReducer(initialState, builder => {
  builder
    .addCase(getQuote.pending, (state) => {
      state.loading = true;
      state.error = '';
    })
    .addCase(getQuote.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    })
    .addCase(getQuote.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
});

export default breakingBadQuoteReducer;
