import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface TotalPageState {
  totalPage: number | null;
}

const initialState: TotalPageState = {
  totalPage: null
};

const totalPage = createSlice({
  name: 'totalPage',
  initialState,
  reducers: {
    setTotalPage: (state, action: PayloadAction<number | null>) => {
      state.totalPage = action.payload;
    }
  }
});


export const { setTotalPage } = totalPage.actions;

export const AddTotalPage = (state: { search: TotalPageState }) =>
  state.search.totalPage;

export default totalPage.reducer;
