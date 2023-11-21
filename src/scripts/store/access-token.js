import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: null,
};

const accessTokenSlice = createSlice({
  name: 'access-token',
  initialState,
  reducers: {
    update() {},
  },
});

export const accessTokenActions = accessTokenSlice.actions;

export default accessTokenSlice.reducer;
