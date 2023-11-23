import { createSlice } from '@reduxjs/toolkit';

import Queue from '../libs/Queue';

const initialState = {
  coversQueue: new Queue(),
};

const coversSlice = createSlice({
  name: 'covers',
  initialState,
  reducers: {
    enqueue(state, action) {
      state.coversQueue.enqueue(action.payload);
    },
    dequeue(state) {},
  },
});

export const coversActions = coversSlice.actions;

export default coversSlice;
