import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchPosts } from '../../redux/actions/add-post-actions';
import { fetchUsers } from '../../redux/actions/add-user-actions';
import { downloadPosts } from '../../redux/actions/app-actions';

import Post from './Post';

import './Post.css';

const Posts = () => {
  const dispatch = useDispatch();
  const postsData = useSelector((state) => state.posts.posts);
  const users = useSelector((state) => state.users.users);
  const downloadUsers = useSelector((state) => state.app.downloadUsers);
  const downloadPost = useSelector((state) => state.app.downloadPosts);
  const loading = useSelector((state) => state.app.loading);

  useEffect(() => {
    if (!downloadUsers) {
      dispatch(fetchUsers());
    }
    if (!downloadPost) {
      dispatch(downloadPosts());
      dispatch(fetchPosts());
    }
  }, [downloadPosts]);

  if (loading) {
    return (
      <div className="loader">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="posts-list">
      {postsData.map((post) => {
        const user = users.find((user) => user.id === post.userId);
        if (user) {
          const postInformation = { ...post, author: user };
          return <Post {...postInformation} key={post.id} />;
        }
      })}
    </div>
  );
};

export default Posts;
