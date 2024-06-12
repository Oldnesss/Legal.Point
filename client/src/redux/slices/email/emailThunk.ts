
import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiService from '../../../services/apiService';


export const thunkSendEmail = createAsyncThunk(
  'email/thunkSendEmail',
  async (formData: any, { rejectWithValue }) => {
    try {
      const response = await ApiService.sendEmail(formData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
