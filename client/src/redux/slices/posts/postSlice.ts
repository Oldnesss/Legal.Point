import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { FirmState, FirmType } from '../../../types/firms';
import {
  thunkDeleteFirm,
  thunkEditFirm,
  thunkGetFirm,
  thunkPostFirm,
} from './postThunk';

const initialState: FirmState = {
  firms: [],
  selectedFirm: null,
  loading: 'idle',
  error: null,
};

export const firmSlice = createSlice({
  name: 'firmSlice',

  initialState,
  reducers: {
    setSelectedFirm: (state, action: PayloadAction<FirmType[]>) => {
      state.selectedFirm = action.payload;
    },
    clearSelectedFirm: (state) => {
      state.selectedFirm = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkGetFirm.fulfilled, (state, action) => {
      state.firms = action.payload;
    });
    builder.addCase(thunkDeleteFirm.fulfilled, (state, action) => {
      state.firms = state.firms.filter((firm) => firm.id !== action.payload);
    });
    builder.addCase(thunkEditFirm.fulfilled, (state, action) => {
      const index = state.firms.findIndex(
        (firm) => firm.id === action.payload.id,
      );
      if (index !== -1) {
        state.firms[index] = action.payload;
      }
    });
    builder.addCase(thunkPostFirm.fulfilled, (state, action) => {
      state.firms.push(action.payload);
    });
  },
});

export const { setSelectedFirm, clearSelectedFirm } = firmSlice.actions;

export default firmSlice.reducer;
