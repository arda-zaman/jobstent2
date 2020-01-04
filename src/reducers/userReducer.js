
import { INIT_USER, USER_SIGN_IN, USER_LOGOUT, CHECK_USER_CONNECTION } from '../constants/ActionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHECK_USER_CONNECTION:
    case INIT_USER:
    case USER_SIGN_IN:
    case USER_LOGOUT:
      return action.payload || false;
    default:
      return state;
  }
};