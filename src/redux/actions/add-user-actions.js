import { ADD_USER, FETCH_USERS } from '../types';
import { hideLoader, showLoader, downloadUsers, showAlert } from './app-actions';

const url = ' http://domer.tech:9999/users/';

export const addUsers = (user) => {
  return async (dispatch) => {
    try {
      const fetched = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await fetched.json();
      data.success
        ? dispatch(showAlert('User successfully added'))
        : dispatch(showAlert('No user added. Something went wrong.', 'error'));
      dispatch({ type: ADD_USER, payload: user });
    } catch (e) {
      dispatch(showAlert('Something went wrong...', 'warning'));
      dispatch(hideLoader());
    }
  };
};
export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(showLoader());
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: FETCH_USERS, payload: data.data });
    setTimeout(() => {
      dispatch(downloadUsers());
      dispatch(hideLoader());
    }, 700);
  };
};
