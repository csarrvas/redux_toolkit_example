import { createAsyncThunk } from '@reduxjs/toolkit';

export const getQuote = createAsyncThunk(
  'breakingBad/getQuote',
  async () => {
    const response = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const data = await response.json();
    return data[0];
  }
);
