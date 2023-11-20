import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PageSettingsType } from '../../types';

const initialState: PageSettingsType = {
  primaryColor: '',
  isAdmin: false,
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
    setAdmin: (state: PageSettingsType) => {
      console.log(
        'Oh wow, you have found a way to give yourself Admin Privileges. The world is open to you but what do these newfound privileges give you, I wonder...'
      );
      state.isAdmin = true;
    },
  },
});

export const { setPrimaryCSSVariable, setAdmin } = pageSettingsSlice.actions;
export default pageSettingsSlice.reducer;
