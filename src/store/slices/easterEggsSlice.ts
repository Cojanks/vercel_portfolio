import { createSlice } from '@reduxjs/toolkit';
import { EasterEggsStoreType } from '../../types';

const initialState: EasterEggsStoreType = {
  eggList: { logoClicked5: false, logoClicked15: false },
  eggInteractionsList: { logoClicks: 0 },
};

export const easterEggsSlice = createSlice({
  name: 'easterEggs',
  initialState,
  reducers: {
    logoClicked: (state: EasterEggsStoreType) => {
      const newClickAmount = state.eggInteractionsList.logoClicks + 1;
      switch (newClickAmount) {
        case 5:
          state.eggList.logoClicked5 = true;
          break;
        case 15:
          state.eggList.logoClicked15 = true;
          break;
        default:
          break;
      }
      state.eggInteractionsList.logoClicks = newClickAmount;
    },
  },
});

export const { logoClicked } = easterEggsSlice.actions;
export default easterEggsSlice.reducer;
