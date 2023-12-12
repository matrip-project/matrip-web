import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface DibsState {
  id: number;
}

// 나중에는 서버에서 받아와야 함
const initialState: DibsState[] = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  }
];

export const dibsSlice = createSlice({
  name: 'dibs',
  initialState,
  reducers: {
    addDibs: (state, action: PayloadAction<number>) => {
      state.push({ id: action.payload });
    },
    removeDibs: (state, action: PayloadAction<number>) => {
      return state.filter((dibs) => dibs.id !== action.payload);
    }
  }
});

export const { addDibs, removeDibs } = dibsSlice.actions;
export default dibsSlice.reducer;
