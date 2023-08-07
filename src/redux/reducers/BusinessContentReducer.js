import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  BusinessContent: [],
  loading: false,
  error: '',
};
export const fetchContentData = createAsyncThunk('businessContent/fetchContentData', () => {
  return axios
   .get('data/BusinessContent.json')
   .then((res) => res.data);
});
const BusinessContentSlice = createSlice({
  name: 'businessContent',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchContentData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchContentData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.BusinessContent = action.payload;
    });
    builder.addCase(fetchContentData.rejected, (state, action) => {
      state.loading = false;
      state.BusinessContent = [];
      state.error = action.error.message;
    });
  },
});
export default BusinessContentSlice.reducer;