import { configureStore } from '@reduxjs/toolkit';

import accessTokenSlice from './access-token-slice';

const store = configureStore({
  reducer: { access: accessTokenSlice.reducer },
});

export default store;
