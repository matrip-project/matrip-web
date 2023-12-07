import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getMyUserData } from '../../apis/api/userData';

type User = {
    ge: number;
    auth: string;
    birth: string;
    email: string;
    id: number;
    intro: string | null;
    link_list: any[]; // link_list의 정확한 타입을 알 수 없으므로 일단 any로 설정하였습니다.
    name: string;
    nation: string | null;
    nickname: string;
    profile_list: any[]; // profile_list의 정확한 타입을 알 수 없으므로 일단 any로 설정하였습니다.
    sex: string;
};

type UserState = {
    isLoggedIn: boolean;
    user: User | null;
};

const initialState: UserState = {
    isLoggedIn: false,
    user: null,
};

export const fetchUserData = createAsyncThunk(
    'user/fetchUserData',
    async (userId: number) => {
        const userData = await getMyUserData(userId);
        const storageDate = JSON.stringify(userData);
        sessionStorage.setItem('userData', storageDate);
        return userData;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<User>) => {
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
