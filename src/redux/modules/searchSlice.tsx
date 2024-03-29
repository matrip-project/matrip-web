import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchState {
  keyword: string | null;
  place: string | null;
  selectedAge: number | 0;
  selectedStatus: string | null;
  selectedStartDate: string | null;
  selectedEndDate: string | null;
}

const initialState: SearchState = {
  keyword: '',
  place: null,
  selectedAge: 0,
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
    setPlace: (state, action: PayloadAction<string>) => {
      state.place = action.payload;
    },
    setSelectedAge: (state, action: PayloadAction<number | 0>) => {
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
    },
    reset: () => {
      return initialState;
    }
  }
});

export const {
  setKeyword,
  setPlace,
  setSelectedAge,
  setSelectedStatus,
  setSelectedStartDate,
  setSelectedEndDate,
  reset
} = searchSlice.actions;

export const selectKeyword = (state: { search: SearchState }) =>
  state.search.keyword;

export const selectPlace = (state: { search: SearchState }) =>
  state.search.place;

export const selectAge = (state: { search: SearchState }) =>
  state.search.selectedAge;

export const selectStatus = (state: { search: SearchState }) =>
  state.search.selectedStatus;

export const selectStartDate = (state: { search: SearchState }) =>
  state.search.selectedStartDate;

export const selectEndDate = (state: { search: SearchState }) =>
  state.search.selectedEndDate;

export default searchSlice.reducer;
