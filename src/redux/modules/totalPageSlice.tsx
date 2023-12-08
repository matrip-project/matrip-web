import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface TotalPageState {
  totalPage: number | null;
}

const initialState: TotalPageState = {
  totalPage: null
};

export const totalPageSlice = createSlice({
  name: 'postTotalPage',
  initialState,
  reducers: {
    setTotalPage: (state, action: PayloadAction<number | null>) => {
      state.totalPage = action.payload;
    }
  }
});

export const { setTotalPage } = totalPageSlice.actions;

export const selectTotalPage = (state: { postTotalPage: TotalPageState }) =>
  state.postTotalPage.totalPage;

export default totalPageSlice.reducer;