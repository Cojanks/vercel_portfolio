import { configureStore } from '@reduxjs/toolkit';

import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import definitionsReducer from './slices/definitionsSlice';
import easterEggsReducer from './slices/easterEggsSlice';

const store = configureStore({
  reducer: {
    definitions: definitionsReducer,
    easterEggs: easterEggsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const { dispatch } = store;

const useDispatch = () => useAppDispatch<AppDispatch>();
const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export { store, dispatch, useSelector, useDispatch };
