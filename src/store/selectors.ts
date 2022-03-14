import { RootState } from "./rootReducer";

export const getUsers = (state: RootState) => state.users;
export const getActiveUserId = (state: RootState) => state.activeUserId;
export const getAllPosts = (state: RootState) => state.allPosts;
export const isUsersLoading = (state: RootState) => state.isUsersLoading;
export const isPostsLoading = (state: RootState) => state.isPostsLoading;
