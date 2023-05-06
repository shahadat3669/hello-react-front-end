import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await fetch(
      'http://localhost:4000/api/v1/greetings/random',
    );
    const data = await response.json();
    return data.message;
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    message: '',
  },

  extraReducers: {
    [fetchGreeting.fulfilled]: (state, action) => {
      state.message = action.payload;
    },
  },
});

export default greetingSlice.reducer;
