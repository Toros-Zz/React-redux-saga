import {
  CREATE_NEW_POST,
  LOADING_POSTS,
  LOADING_USERS,
  LOAD_ALL_POSTS,
  LOAD_USERS,
  SET_ACTIVE_USER,
  SET_POSTS,
  SET_USERS
} from './types';

export const loadUsers = () => ({ type: LOAD_USERS });
export const setUsers = (payload: User[]) => ({ type: SET_USERS, payload });
export const setActiveUserId = (payload: string) => ({ type: SET_ACTIVE_USER, payload });
export const setPosts = (payload: Post[]) => ({ type: SET_POSTS, payload });
export const loadPosts = () => ({ type: LOAD_ALL_POSTS });
export const loadingPosts = () => ({ type: LOADING_POSTS });
export const loadingUsers = () => ({ type: LOADING_USERS });
export const createPost = () => ({ type: CREATE_NEW_POST });
