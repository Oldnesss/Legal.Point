import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { FirmType } from '../../../types/firms';

type ModalState = {
  isOpen: boolean;
  selectedFirm: FirmType | null;
};

const initialState: ModalState = {
  isOpen: false,
  selectedFirm: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<FirmType>) {
      state.isOpen = true;
      state.selectedFirm = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.selectedFirm = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
