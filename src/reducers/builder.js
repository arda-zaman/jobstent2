import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  basic_fields: 'open',
  quick_fields: 'open',
  imageUploader: {
    open: false,
    file: null
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ACTIVE_PATH_CHANGE:
    case ActionTypes.SET_ACTIVE_FIELD:
    case ActionTypes.REMOVE_ACTIVE_FIELD:
    case ActionTypes.LEFT_PANEL_MENU_HANDLER:
    case ActionTypes.IMAGE_UPLOAD_START:
    case ActionTypes.IMAGE_UPLOAD_CANCEL:
    case ActionTypes.IMAGE_UPLOAD_DONE:
      return action.payload || false
    default:
      return state;
  }
}