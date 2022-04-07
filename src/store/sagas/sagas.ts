import { all, takeLatest } from 'redux-saga/effects';
import { CREATE_NEW_POST, LOAD_ALL_POSTS, LOAD_USERS } from '../types';
import { getPosts, pushPost } from './sagasPost';
import { getUser } from './sagasUsers';

function* watchLoadUsers() {
  yield takeLatest(LOAD_USERS, getUser);
}

function* watchLoadPosts() {
  yield takeLatest(LOAD_ALL_POSTS, getPosts);
}

function* watchPushNewPost() {
  yield takeLatest(CREATE_NEW_POST, pushPost);
}

export default function* rootSaga() {
  yield all([watchLoadUsers(), watchLoadPosts(), watchPushNewPost()]);
}
