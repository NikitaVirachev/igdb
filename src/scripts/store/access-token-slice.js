import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: null,
  isLoadedStatus: null,
  errors: null,
};

const accessTokenSlice = createSlice({
  name: 'access-token',
  initialState,
  reducers: {
    update(state, action) {
      state.accessToken = action.payload;
    },
    loadedSuccessfully(state) {
      state.isLoadedStatus = 'success';
      state.errors = null;
    },
    loadedFailed(state, action) {
      state.isLoadedStatus = 'fail';
      state.errors = action.payload;
    },
  },
});

export const accessTokenActions = accessTokenSlice.actions;

export default accessTokenSlice;
