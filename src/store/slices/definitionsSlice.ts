import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CategoryDBType, DefinitionsType, TagDBType } from '../../types';

const initialState: DefinitionsType = {
  tags: {},
  categories: {},
};

export const definitionsSlice = createSlice({
  name: 'tagDefinitions',
  initialState,
  reducers: {
    getTags: (
      state: DefinitionsType,
      action: PayloadAction<{ tags: TagDBType[] }>
    ) => {
      state.tags =
        Object.keys(state.tags).length >= 1
          ? state.tags
          : action.payload.tags.reduce((accumulator, value) => {
              return { ...accumulator, [value.id]: value.name };
            }, {});
    },
    getCategories: (
      state: DefinitionsType,
      action: PayloadAction<{ categories: CategoryDBType[] }>
    ) => {
      state.categories =
        Object.keys(state.categories).length >= 1
          ? state.categories
          : action.payload.categories.reduce((accumulator, cat) => {
              return {
                ...accumulator,
                [cat.id]: {
                  name: cat.name,
                  description: cat.description,
                },
              };
            }, {});
    },
  },
});

export const { getTags, getCategories } = definitionsSlice.actions;
export default definitionsSlice.reducer;
