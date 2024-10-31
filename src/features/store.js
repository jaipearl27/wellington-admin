import { configureStore } from '@reduxjs/toolkit';
import galleryReducer from './Slices/photographySlice'; // Adjust the path based on your folder structure

import UserSlices from './Slices/UserSlices';

const store = configureStore({
  reducer: {
    gallery: galleryReducer,
    users:UserSlices

    
      


  },
});

export default store;
