import { SET_VALUE_BUTTONS, CREATE_POST, FETCH_POSTS } from '../types';

const initialState = {
  posts: [],
};

export const postsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case CREATE_POST:
      return { ...state, posts: [...state.posts, actions.payload] };
    case FETCH_POSTS:
      return { ...state, posts: [...state.posts, ...actions.payload] };
    case SET_VALUE_BUTTONS:
      const correctPosts = state.posts.map((post) => {
        let { id, addButton, buttonValue, buttonType } = actions.payload;
        if (post.id === id) {
          if (addButton) {
            buttonValue -= 1;
            addButton = false;
            return {
              ...post,
              [`${buttonType}`]: buttonValue,
              [`add${buttonType}`]: addButton,
            };
          } else {
            buttonValue += 1;
            addButton = true;
            return {
              ...post,
              [buttonType]: buttonValue,
              [`add${buttonType}`]: addButton,
            };
          }
        } else {
          return post;
        }
      });
      return { ...state, posts: correctPosts };

    default:
      return state;
  }
};
