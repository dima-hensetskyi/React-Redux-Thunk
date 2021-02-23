import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchUsers } from '../../redux/actions/add-user-actions';
import { useEffect } from 'react';

import User from './User';

import './userForm.css';
const Users = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.app.loading);
  const download = useSelector((state) => state.app.downloadUsers);

  useEffect(() => {
    if (!download) {
      dispatch(fetchUsers());
    }
  }, [download]);

  if (loading) {
    return (
      <div className="loader">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="users-list">
      {usersData.map((user, index) => (
        <User {...user} key={index} />
      ))}
    </div>
  );
};

export default Users;
