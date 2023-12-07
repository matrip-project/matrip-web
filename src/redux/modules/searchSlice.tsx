import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchState {
  keyword: string;
  selectedAge: number | null;
  selectedStatus: string | null;
  selectedStartDate: string | null;
  selectedEndDate: string | null;
}

const initialState: SearchState = {
  keyword: '',
  selectedAge: null,
  selectedStatus: null,
  selectedStartDate: null,
  selectedEndDate: null
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
    },
    setSelectedStartDate: (state, action: PayloadAction<string | null>) => {
      state.selectedStartDate = action.payload;
    },
    setSelectedEndDate: (state, action: PayloadAction<string | null>) => {
      state.selectedEndDate = action.payload;
    }
  }
});

export const {
  setKeyword,
  setSelectedAge,
  setSelectedStatus,
  setSelectedStartDate,
  setSelectedEndDate
} = searchSlice.actions;

export const selectKeyword = (state: { search: SearchState }) =>
  state.search.keyword;

export const AddSelectedAge = (state: { search: SearchState }) =>
  state.search.selectedAge;

export const AddSelectedStatus = (state: { search: SearchState }) =>
  state.search.selectedStatus;

export const AddSelectedStartDate = (state: { search: SearchState }) =>
  state.search.selectedStartDate;

export const AddSelectedEndDate = (state: { search: SearchState }) =>
  state.search.selectedEndDate;

export default searchSlice.reducer;
