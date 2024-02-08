import { createSlice } from '@reduxjs/toolkit';

type LoadingProps = {
    isLoading : boolean;
};

const initialState:LoadingProps = {
    isLoading : false,
};


const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
