import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LocationState {
  lat: number;
  lng: number;
}

const initialState: LocationState = {
  lat: 37.5665,
  lng: 126.978
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<LocationState>) => {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
    }
  }
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
