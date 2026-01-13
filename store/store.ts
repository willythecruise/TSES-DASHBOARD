import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import lessonReducer from './slices/lessonSlice';
import { apiSlice } from './api/apiSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    lessons: lessonReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
