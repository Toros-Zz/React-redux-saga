import { getData, addData } from './api';

export const fetchPosts = (userId: string, page: number) => {
  const postsLoad = 6;

  if (userId === '0') {
    return getData<Post[]>(`posts?_limit=${postsLoad}&_page=${page}`);
  }

  return getData<Post[]>(`posts?userId=${userId}&_limit=${postsLoad}&_page=${page}`);
};

export const pushNewPost = (post: Post): Promise<Post> => {
  return addData<Post>('posts', post);
};
