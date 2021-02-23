import { ADD_USER, FETCH_USERS } from '../types';

const initialState = {
  users: [],
};

export const addUser = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, actions.payload] };
    case FETCH_USERS:
      return { ...state, users: [...state.users, ...actions.payload] };
    default:
      return state;
  }
};
