import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  HomeRecent: [],
  loading: false,
  error: '',
};
export const fetchData = createAsyncThunk('homeRecent/fetchData', () => {
  return axios
   .get('data/HomeMostRecent.json')
   .then((res) => res.data);
});
const HomeRecentSlice = createSlice({
  name: 'homeRecent',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.HomeRecent = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.HomeRecent = [];
      state.error = action.error.message;
    });
  },
});
export default HomeRecentSlice.reducer;