import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../store/actions';
import { getUsers } from './../../store/selectors';

let newPost: Post | null = null;

export const getNewPost = () => {
  return newPost;
};

export const Form: React.FC = () => {
  const dispatch = useDispatch();
  const [post, setPost] = useState<Post>({
    title: '',
    body: '',
    userId: 0
  });
  const users = useSelector(getUsers);

  const isValidPost = () => {
    if (!post.title.trim()) {
      console.log('Type correct title');

      return false;
    }

    if (!post.body.trim()) {
      console.log('Type correct body');

      return false;
    }

    if (post.userId === 0) {
      console.log('Please select user');

      return false;
    }

    return true;
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.currentTarget;

    setPost({ ...post, [name]: value });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    newPost = post;

    if (isValidPost()) {
      dispatch(createPost());
    }
  };

  return (
    <form onSubmit={submitHandler} className="box m-4">
      <input
        placeholder="Title"
        type="text"
        name="title"
        className="input"
        value={post.title}
        onChange={onChangeHandler}
      />
      <input
        placeholder="Body"
        type="text"
        name="body"
        className="input"
        value={post.body}
        onChange={onChangeHandler}
      />
      <select name="userId" className="select" onChange={onChangeHandler} value={post.userId}>
        <option value="0">Select user</option>

        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <button className="button" type="submit">
        Create new post
      </button>
    </form>
  );
};
