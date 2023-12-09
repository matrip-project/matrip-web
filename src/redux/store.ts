import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './modules/searchSlice';
import dibsSlice from './modules/dibSlice';
import keywordImgSlice from './modules/keywordImgSlice';

import userDataSlice from './modules/userDataSlice';

import totalPageSlice from './modules/totalPageSlice';
import locationSlice from './modules/locationSlice';


export const store = configureStore({
  reducer: {
    search: searchReducer,
    dibsSlice: dibsSlice,
    keyword: keywordImgSlice,
    userData: userDataSlice,
    postTotalPage: totalPageSlice,
    location: locationSlice

  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
