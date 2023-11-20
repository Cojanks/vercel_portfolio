import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CategoryListSocialsType, SocialsType } from '../../types';

const initialState: CategoryListSocialsType = {
  isLoading: true,
  tagSocialData: {},
};

export const tagSocialsSlice = createSlice({
  name: 'tagSocials',
  initialState,
  reducers: {
    settagSocials: (
      state: CategoryListSocialsType,
      action: PayloadAction<{ socials: SocialsType }>
    ) => {
      state.isLoading = false;
      state.tagSocialData = action.payload.socials;
    },
    updateTagSocialByTagId: (
      state: CategoryListSocialsType,
      action: PayloadAction<{
        tagId: number;
        socialCount: { [key: number]: number };
      }>
    ) => {
      state.tagSocialData = {
        ...state.tagSocialData,
        [action.payload.tagId]: action.payload.socialCount,
      };
    },
  },
});

export const { settagSocials, updateTagSocialByTagId } =
  tagSocialsSlice.actions;
export default tagSocialsSlice.reducer;
