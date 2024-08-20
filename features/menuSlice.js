import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMenu = createAsyncThunk('menu/fetchMenu', async () => {
  const response = await axios.get('/api/menu');
  return response.data;
});

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  },
});

export default menuSlice.reducer;
