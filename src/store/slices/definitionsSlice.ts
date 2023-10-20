import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DefinitionsType, TagDBType } from '../../types';

const initialState: DefinitionsType = {
  tags: {},
  errors: [],
};

export const definitionsSlice = createSlice({
  name: 'tagDefinitions',
  initialState,
  reducers: {
    setTags: (
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
  },
});

export const { setTags } = definitionsSlice.actions;
export default definitionsSlice.reducer;
