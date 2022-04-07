import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadingPosts, loadPosts } from '../../store/actions';
import { getActiveUserId, getAllPosts, isPostsLoading } from '../../store/selectors';
import { Loader } from '../Loader';

let selectUserId = '0';
let selectPage = 1;

export const resetSelectPage = () => {
  selectPage = 1;
};
export const getUserId = () => selectUserId;
export const getSelectedPage = () => selectPage;

export const PostList: React.FC = () => {
  const dispatch = useDispatch();
  selectUserId = useSelector(getActiveUserId);
  const posts = useSelector(getAllPosts);
  const isLoad = useSelector(isPostsLoading);

  useEffect(() => {
    dispatch(loadingPosts());
    dispatch(loadPosts());
  }, [selectUserId]);

  const handlerNextPage = () => {
    selectPage++;
    dispatch(loadingPosts());
    dispatch(loadPosts());
    console.log(selectPage);
  };

  return (
    <>
      <ul className="postList m-4">
        {posts.map((post) => (
          <li key={post.id} className="box">
            <h2 className="title">{post.title}</h2>
            <p>ID {post.id}</p>
            <div>{post.body}</div>
          </li>
        ))}
      </ul>
      <div className="is-flex is-justify-content-center">{isLoad && <Loader />}</div>
      <button className="button" onClick={handlerNextPage}>
        Load more
      </button>
    </>
  );
};
