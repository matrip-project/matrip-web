import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getUserData } from '../../apis/api/userData';
import { setLoading } from './loadingSlice';
import { UserProps } from '../../types/userData';

type UserState = {
  isLoggedIn: boolean;
  user: UserProps | null;
};

const initialState: UserState = {
  isLoggedIn: false,
  user: null
};

export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (userId: number, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      const userData = await getUserData(userId);
      const storageDate = JSON.stringify(userData);
      localStorage.setItem('userData', storageDate);
      dispatch(setLoading(false));
      return userData;
    } catch (e) {
      dispatch(setLoading(false)); // 에러 발생시 로딩 완료
      return rejectWithValue(e);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<UserProps>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        console.log('PENDING...', 'userDataSlice');
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        console.log(action.error.message);
      });
  }
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;
