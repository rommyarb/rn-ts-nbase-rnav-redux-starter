import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import { StoreState } from '../types/StoreState';

const NAME = 'settings';
const persistConfig = {
  key: NAME,
  version: 1,
  storage: AsyncStorage,
};

const initialState: StoreState.Settings = {
  darkMode: false,
  myName: '',
};

const slice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    updateSettings: (
      state,
      action: PayloadAction<{ darkMode?: boolean; myName?: string }>,
    ) => {
      const { darkMode, myName } = action.payload;
      if (darkMode) state.darkMode = darkMode;
      if (myName) state.myName = myName;
    },
  },
});

export const { updateSettings } = slice.actions;
export default persistReducer(persistConfig, slice.reducer);
