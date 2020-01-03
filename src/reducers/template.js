import * as ActionTypes from '../constants/ActionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INIT_TEMPLATE:
    case ActionTypes.FETCH_TEMPLATE:
    case ActionTypes.FIELD_ITEM_CREATED:
    case ActionTypes.FIELD_ITEM_UPDATE:
    case ActionTypes.ADD_NEW_PAGE:
    case ActionTypes.ADD_NEW_LAYOUT:
      return action.payload || false
    default:
      return state;
  }
}