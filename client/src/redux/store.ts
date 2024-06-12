import { configureStore } from '@reduxjs/toolkit';
import firmReducer from './slices/posts/postSlice';
import emailReducer from './slices/email/emailSlice';

export const store = configureStore({
  reducer: {
    firmSlice: firmReducer,
    emailSlice: emailReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
