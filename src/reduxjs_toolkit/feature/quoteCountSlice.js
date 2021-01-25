import { createSlice } from '@reduxjs/toolkit';

const quoteCountSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increaseCounter: state => state + 1,
  }
});

export default quoteCountSlice;
