import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchState {
  keyword: string;
  selectedAge: number | null;
  selectedStatus: string | null;
}

const initialState: SearchState = {
  keyword: '',
  selectedAge: null,
  selectedStatus: null
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
    setSelectedAge: (state, action: PayloadAction<number | null>) => {
      state.selectedAge = action.payload;
    },
    setSelectedStatus: (state, action: PayloadAction<string | null>) => {
      state.selectedStatus = action.payload;
    }
  }
});

export const { setKeyword, setSelectedAge, setSelectedStatus } =
  searchSlice.actions;

export const selectKeyword = (state: { search: SearchState }) =>
  state.search.keyword;

export const AddSelectedAge = (state: { search: SearchState }) =>
  state.search.selectedAge;

export const AddSelectedStatus = (state: { search: SearchState }) =>
  state.search.selectedStatus;

export default searchSlice.reducer;
