import { getData, addData } from "./api"

export const fetchPosts = (userId: string) => {
  if (userId === '0') {
    return getData<Post[]>('posts');
  }

  return getData<Post[]>(`posts?userId=${userId}`);
}

export const pushNewPost = (post: Post): Promise<Post> => {
  return addData<Post>('posts', post);
}

