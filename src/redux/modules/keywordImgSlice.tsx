import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface KeywordState {
  value: string;
}

const initialState: KeywordState = {
  value: '',
};

const keywordImgSlice = createSlice({
  name: 'keyword',
  initialState,
  reducers: {
    setKeyword: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setKeyword } = keywordImgSlice.actions;
export const selectPopularTravelKeyword = (state: { keyword: KeywordState }) => state.keyword.value;

export default keywordImgSlice.reducer;