import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers, setActiveUserId } from '../../store/actions';
import { getUsers } from '../../store/selectors';
import { Loader } from '../Loader';
import { resetSelectPage } from '../PostList';
import { loadingUsers } from './../../store/actions';

export const UserSelector: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const [selectedUserId, setSelectedUserId] = useState('0');

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  useEffect(() => {
    dispatch(loadingUsers());

    dispatch(setActiveUserId(selectedUserId));
  }, [selectedUserId]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUserId(event.currentTarget.value);
    resetSelectPage();
  };

  if (users.length === 0) {
    return <Loader />;
  }

  return (
    <select value={selectedUserId} onChange={onChangeHandler} className="select ml-4">
      <option value={0}>All posts</option>
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
};
