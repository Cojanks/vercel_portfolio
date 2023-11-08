import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PageSettingsType } from '../../types';

const initialState: PageSettingsType = {
  primaryColor: '',
};

export const pageSettingsSlice = createSlice({
  name: 'pageSettings',
  initialState,
  reducers: {
    setPrimaryCSSVariable: (
      state: PageSettingsType,
      action: PayloadAction<{ cssVal: string }>
    ) => {
      state.primaryColor = action.payload.cssVal;
    },
  },
});

export const { setPrimaryCSSVariable } = pageSettingsSlice.actions;
export default pageSettingsSlice.reducer;
