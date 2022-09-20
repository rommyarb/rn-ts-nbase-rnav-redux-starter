import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './settingsReducer';
import todoReducer from './todoReducer';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    todo: todoReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// selectors
type RootState = ReturnType<typeof store.getState>;
export const settingsSelector = (state: RootState) => state.settings;
export const todoSelector = (state: RootState) => state.todo;
// export const yourOtherSelector = (state: RootState) => state.yourOtherReducer;

export const persistor = persistStore(store);
export default store;
