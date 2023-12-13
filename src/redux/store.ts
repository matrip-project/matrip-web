import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import searchReducer from './modules/searchSlice';
import dibsSlice from './modules/dibSlice';
import keywordImgSlice from './modules/keywordImgSlice';
import userDataSlice from './modules/userDataSlice';
import loadingSlice from './modules/loadingSlice';
import totalPageSlice from './modules/totalPageSlice';
import replySlice from './modules/replySlice';
import postSlice from './modules/postSlice';

const reducers = combineReducers({
  search: searchReducer,
  dibsSlice: dibsSlice,
  keyword: keywordImgSlice,
  userData: userDataSlice,
  postTotalPage: totalPageSlice,
  reply: replySlice,
  post: postSlice,
  loading: loadingSlice
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['post'],
  blacklist: ['dibsSlice', 'keyword', 'userData', 'postTotalPage', 'reply']
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
