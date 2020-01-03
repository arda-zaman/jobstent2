import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  activeMenu: 'field-settings'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.RIGHT_PANEL_MENU_SWITCH:
      return action.payload || false;
    default:
      return state;
  }
}