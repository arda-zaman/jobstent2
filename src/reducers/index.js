import { combineReducers } from "redux";
import userReducer from "./userReducer";
import builderReducer from './builder';
import rightPanelReducer from './rightPanel';
import templateReducer from './template';
import uiReducer from './ui';

export default combineReducers({
  user: userReducer,
  builder: builderReducer,
  rightPanel: rightPanelReducer,
  template: templateReducer,
  ui: uiReducer
});