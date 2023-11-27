import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coversIsLoading: null,
  gamesIsLoading: null,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    updateGameLoading(state, actions) {
      state.gamesIsLoading = actions.payload;
    },
  },
});

export const loadingActions = loadingSlice.actions;

export default loadingSlice;
