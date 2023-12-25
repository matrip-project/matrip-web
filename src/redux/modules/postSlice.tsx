import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JourneyProps, ImageProps } from '../../types/postData';
import dayjs from 'dayjs';
import { addDays } from 'date-fns';

interface PostState {
  data: JourneyProps;
  preview: File | null;
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
    memberId: 0,
    journeyImgRequestDtoList: [
      {
        id: 0,
        path: '',
        sequence: 0
      }
    ]
  },
  preview: null
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setMemberId: (state, action: PayloadAction<number>) => {
      state.data.memberId = action.payload;
    },
    setData: (state, action: PayloadAction<JourneyProps>) => {
      state.data = action.payload;
    },
    setImage: (state, action: PayloadAction<ImageProps[]>) => {
      state.data.journeyImgRequestDtoList = action.payload;
    },
    setPreview: (state, action: PayloadAction<File>) => {
      state.preview = action.payload;
    },
    deleteAll: (state) => {
      return initialState;
    }
  }
});

export const { setMemberId, setData, setImage, setPreview, deleteAll } =
  postSlice.actions;
export default postSlice.reducer;
