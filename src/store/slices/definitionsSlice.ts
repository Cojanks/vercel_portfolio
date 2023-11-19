import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DefinitionsType } from '../../types';
import { Database } from '../../services/supabase';

const initialState: DefinitionsType = {
  tags: {},
  errors: {},
};

export const definitionsSlice = createSlice({
  name: 'tagDefinitions',
  initialState,
  reducers: {
    setTags: (
      state: DefinitionsType,
      action: PayloadAction<{
        tags: Database['public']['Tables']['skill_tags']['Row'][];
      }>
    ) => {
      state.tags =
        Object.keys(state.tags).length >= 1
          ? state.tags
          : action.payload.tags.reduce((accumulator, value) => {
              return { ...accumulator, [value.id]: value.name };
            }, {});
      state.errors = {};
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

export const { setTags, setError } = definitionsSlice.actions;
export default definitionsSlice.reducer;
