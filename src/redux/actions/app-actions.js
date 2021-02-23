import {
  DOWNLOAD_USERS,
  HIDE_LOADER,
  SHOW_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
  DOWNLOAD_POSTS,
} from '../types';

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}
export function showAlert(text, typeAlert) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
      typeAlert,
    });
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

export function downloadUsers() {
  return {
    type: DOWNLOAD_USERS,
  };
}
export function downloadPosts() {
  return {
    type: DOWNLOAD_POSTS,
  };
}
