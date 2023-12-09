import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataProps, ImageProps } from '../../types/postData';
import dayjs from 'dayjs';
import { addDays } from 'date-fns';

const userId = sessionStorage.getItem('myId');

interface PostState {
  data: DataProps;
  image: ImageProps[];
}

const initialState: PostState = {
  data: {
    id: 0,
    title: '',
    content: '',
    city: '',
    startDate: dayjs(new Date()).format('YYYY-MM-DD'),
    endDate: dayjs(addDays(new Date(), 1)).format('YYYY-MM-DD'),
    count: 0,
    latitude: 0.0,
    longitude: 0.0,
    tag: '',
    status: 'ACTIVE',
    memberId: userId ? parseInt(userId) : 0
  },
  image: [
    {
      id: 0,
      path: '',
      sequence: 0
    }
  ]
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<DataProps>) => {
      state.data = action.payload;
    },
    setImage: (state, action: PayloadAction<ImageProps[]>) => {
      state.image = action.payload;
    },
    deleteAll: (state) => {
      return initialState;
    }
  }
});

export const { setData, setImage, deleteAll } = postSlice.actions;
export default postSlice.reducer;
