import { put } from "redux-saga/effects";
import { setPosts } from "../actions";
import { fetchPosts, pushNewPost } from '../../api/apiPost';
import { getUserId } from "../../commponets/PostList";
import { getNewPost } from "../../commponets/Form";

export function* getPosts() {
  const userId: string = yield  getUserId();
  const posts: Post[] = yield fetchPosts(userId);

  yield put(setPosts(posts));
}

export function* pushPost() {
  const post: Post = yield  getNewPost();

  const postLoaded: Promise<Post> = yield pushNewPost(post);
  
  console.log('Your post was created');
  console.log(postLoaded);
}
