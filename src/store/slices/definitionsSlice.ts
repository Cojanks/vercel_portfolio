import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DefinitionsType, SkillDetailsDBType, TagDBType } from '../../types';

const initialState: DefinitionsType = {
  tags: {},
  errors: {},
  details: {},
};

export const definitionsSlice = createSlice({
  name: 'tagDefinitions',
  initialState,
  reducers: {
    setTags: (
      state: DefinitionsType,
      action: PayloadAction<{
        tags: TagDBType[];
      }>
    ) => {
      state.tags =
        Object.keys(state.tags).length >= 1
          ? state.tags
          : action.payload.tags.reduce((accumulator, value) => {
              return {
                ...accumulator,
                [value.id]: { name: value.name, detail_ids: value.detail_ids },
              };
            }, {});
      state.errors = {};
    },
    setDetails: (
      state: DefinitionsType,
      action: PayloadAction<{
        details: SkillDetailsDBType[];
      }>
    ) => {
      state.details = action.payload.details.reduce((accumulator, value) => {
        return {
          ...accumulator,
          [value.id]: value,
        };
      }, {});
    },
    setError: (
      state: DefinitionsType,
      action: PayloadAction<{ type: string; message: string }>
    ) => {
      state.errors = state.errors[action.payload.type]
        ? state.errors
        : { ...state.errors, [action.payload.type]: action.payload.message };
    },
  },
});

export const { setTags, setDetails, setError } = definitionsSlice.actions;
export default definitionsSlice.reducer;
