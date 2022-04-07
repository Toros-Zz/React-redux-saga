import { put } from 'redux-saga/effects';
import { fetchAllUsers } from '../../api/apiUser';
import { loadingUsers, setUsers } from '../actions';

export function* getUser() {
  put(loadingUsers());
  const users: User[] = yield fetchAllUsers();
  yield put(setUsers(users));
}
