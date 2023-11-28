import { configureStore } from '@reduxjs/toolkit';

import accessTokenSlice from './access-token-slice';
import loadingSlice from './loading-slice';

const store = configureStore({
  reducer: { access: accessTokenSlice.reducer, loading: loadingSlice.reducer },
});

export default store;
