import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './modules/searchSlice';
import dibsSlice from './modules/dibSlice';
import keywordImgSlice from './modules/keywordImgSlice';
import userDataSlice from './modules/userDataSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    dibsSlice: dibsSlice,
    keyword: keywordImgSlice,
    userData: userDataSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
