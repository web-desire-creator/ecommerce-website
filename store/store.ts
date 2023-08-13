import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import userSlice from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    cartSlice,
    userSlice
}
  },
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;