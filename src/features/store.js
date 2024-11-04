import { configureStore } from '@reduxjs/toolkit';

import UserSlices from './Slices/UserSlices';

const store = configureStore({
  reducer: {
    users:UserSlices
  },
});

export default store;
