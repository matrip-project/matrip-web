import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchState {
  keyword: string;
}

const initialState: SearchState = {
  keyword: ''
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    }
  }
});

export const { setKeyword } = searchSlice.actions;
export const selectKeyword = (state: { search: SearchState }) =>
  state.search.keyword;

export default searchSlice.reducer;
