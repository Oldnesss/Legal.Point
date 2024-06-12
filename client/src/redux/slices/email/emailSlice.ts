import { createSlice } from '@reduxjs/toolkit';
import { thunkSendEmail } from './emailThunk';

type EmailState = {
  loading: boolean;
  success: boolean | null;
  error: string | null;
};

const initialState: EmailState = {
  loading: false,
  success: null,
  error: null,
};

const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunkSendEmail.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(thunkSendEmail.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(thunkSendEmail.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export default emailSlice.reducer;
