import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getQuote = createAsyncThunk(
  'breakingBad/getQuote',
  async () => {
    const response = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const data = await response.json();
    return data[0];
  }
);

const breakingBadQuoteSlice = createSlice({
  name: 'breakingBad',
  initialState: {
    loading: false,
    data: {},
    error: '',
  },
  reducers: {},
  extraReducers: {
    [getQuote.pending]: state => ({
      ...state,
      loading: true,
      error: '',
    }),
    [getQuote.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload,
      error: '',
    }),
    [getQuote.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  }
});

export default breakingBadQuoteSlice;
