import { configureStore } from '@reduxjs/toolkit';
import firmReducer from './slices/posts/postSlice';
import emailReducer from './slices/email/emailSlice';
import modalReducer from './slices/modal/modalSlice';

export const store = configureStore({
  reducer: {
    firmSlice: firmReducer,
    emailSlice: emailReducer,
    modalSlice: modalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
