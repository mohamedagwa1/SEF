import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  BusinessRecent: [],
  loading: false,
  error: '',
};
export const fetchData = createAsyncThunk('businessRecent/fetchData', () => {
  return axios
   .get('data/BusinessMostRecent.json')
   .then((res) => res.data);
});
const BusinessRecentSlice = createSlice({
  name: 'businessRecent',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.BusinessRecent = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.BusinessRecent = [];
      state.error = action.error.message;
    });
  },
});
export default BusinessRecentSlice.reducer;