import {
  DOWNLOAD_USERS,
  HIDE_LOADER,
  SHOW_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
  DOWNLOAD_POSTS,
} from '../types';

const initialState = {
  loading: false,
  downloadUsers: false,
  downloadPosts: false,
  alert: null,
  typeAlert: '',
};
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SHOW_ALERT:
      return { ...state, alert: action.payload, typeAlert: action.typeAlert };
    case HIDE_ALERT:
      return { ...state, alert: null };
    case DOWNLOAD_USERS:
      return { ...state, downloadUsers: true };
    case DOWNLOAD_POSTS:
      return { ...state, downloadPosts: true };
    default:
      return state;
  }
};
