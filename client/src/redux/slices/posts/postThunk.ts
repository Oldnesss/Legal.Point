import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiService from '../../../services/apiService';
import type { FirmType, PostFirmFormDataType } from '../../../types/firms';

export const thunkGetFirm = createAsyncThunk(
  'firmSlice/thunkGetFirm',
  async () => ApiService.getFirms(),
);

export const thunkDeleteFirm = createAsyncThunk(
  'firmSlice/thunkDeleteFirm',
  (id: FirmType['id']) => ApiService.deleteFirm(id),
);

export const thunkEditFirm = createAsyncThunk(
  'firmSlice/thunkEditFirm',
  ({
    formData,
    id,
  }: {
    formData: PostFirmFormDataType;
    id: FirmType['id'] | undefined;
  }) => ApiService.editFirm(formData, id),
);

export const thunkPostFirm = createAsyncThunk(
  'firmSlice/thunkPostFirm',
  (formData: PostFirmFormDataType) => ApiService.postFirm(formData),
);
