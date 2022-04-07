import { getData } from './api';

export const fetchAllUsers = () => {
  return getData<User[]>('users');
};
