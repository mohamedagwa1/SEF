import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  HomeContent: [],
  loading: false,
  error: '',
};
export const fetchContentData = createAsyncThunk('homeContent/fetchContentData', () => {
  return axios
   .get('data/HomeContent.json')
   .then((res) => res.data);
});
const HomeContentSlice = createSlice({
  name: 'homeContent',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchContentData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchContentData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.HomeContent = action.payload;
    });
    builder.addCase(fetchContentData.rejected, (state, action) => {
      state.loading = false;
      state.HomeContent = [];
      state.error = action.error.message;
    });
  },
});
export default HomeContentSlice.reducer;