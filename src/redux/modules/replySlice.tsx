import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReplyState {
  parentId: number;
}

const initialState: ReplyState = {
  parentId: 0
};

const replySlice = createSlice({
  name: 'reply',
  initialState,
  reducers: {
    setReply: (state, action: PayloadAction<number>) => {
      state.parentId = action.payload;
    }
  }
});

export const { setReply } = replySlice.actions;
export const selectParentId = (state: { reply: ReplyState }) =>
  state.reply.parentId;
export default replySlice.reducer;
