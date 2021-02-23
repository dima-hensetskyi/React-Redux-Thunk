import { CREATE_POST, FETCH_POSTS, SET_VALUE_BUTTONS } from '../types';
import { hideLoader, showLoader, showAlert } from './app-actions';

const url = 'http://domer.tech:9999/tweets/';

export function createPost(post) {
  return async (dispatch) => {
    try {
      const fetched = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });
      const response = await fetched.json();

      response.success
        ? dispatch(showAlert('Post successfully added'))
        : dispatch(showAlert('No post added. Something went wrong.', 'error'));
      dispatch({ type: CREATE_POST, payload: post });
    } catch (e) {
      dispatch(showAlert('Something went wrong...', 'warning'));
      dispatch(hideLoader());
    }
  };
}

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(showLoader());
    const response = await fetch(url);
    const data = await response.json();

    dispatch({ type: FETCH_POSTS, payload: data.data });
    setTimeout(() => {
      dispatch(hideLoader());
    }, 700);
  };
};

export const setValueButtons = (id, addButton, buttonValue, buttonType) => {
  return {
    type: SET_VALUE_BUTTONS,
    payload: { id, addButton, buttonValue, buttonType },
  };
};
