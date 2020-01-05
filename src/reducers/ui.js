
import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  modal: {
    active: false
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.OPEN_MODAL:
    case ActionTypes.CLOSE_MODAL:
    case ActionTypes.UPDATE_MODAL:
      return action.payload || false;
    default:
      return state;
  }
};

