import { combineReducers } from 'redux';
import { addUser } from './add-user-reducer';
import { appReducer } from './app-reducer';
import { postsReducer } from './posts-reducer';

export const rootReducer = combineReducers({
  posts: postsReducer,
  users: addUser,
  app: appReducer,
});
