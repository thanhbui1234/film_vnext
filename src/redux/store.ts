import { configureStore } from "@reduxjs/toolkit";
import filmSlice from "./filmSlice";
export const store = configureStore({
  reducer: {
    FILM: filmSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
