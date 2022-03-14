import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadingPosts, loadPosts } from '../../store/actions';
import { getActiveUserId, getAllPosts, isPostsLoading } from '../../store/selectors';
import { Loader } from '../Loader';

let selectUserId = '0';

export const getUserId = () => (selectUserId);

export const PostList: React.FC = () => {
  const dispatch = useDispatch();
  selectUserId = useSelector(getActiveUserId);
  const posts = useSelector(getAllPosts);
  const isLoad = useSelector(isPostsLoading);


  useEffect(() => {
    dispatch(loadingPosts());

    dispatch(loadPosts());
  }, [selectUserId]);

  if (isLoad) {
    return <Loader />
  }

  return ( 
    <ul className="postList">
      {
        posts.map(post => (
          <li key={post.id}  className="box">
            <h2 className="title">
              {post.title}
            </h2>
            <div>
              {post.body}
            </div>
          </li>
        ))
      }
    </ul>
  );
}

