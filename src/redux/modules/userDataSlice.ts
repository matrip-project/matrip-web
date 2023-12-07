import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getMyUserData } from '../../apis/api/userData';

type UserState = {
    isLoggedIn: boolean;
    user: number | null;
};

const initialState: UserState = {
    isLoggedIn: false,
    user: null,
};

export const fetchUserData = createAsyncThunk(
    'user/fetchUserData',
    async (userId: number) => {
        const userData = await getMyUserData(userId);
        return userData;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<number>) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.user = action.payload;
        });
    },
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;
