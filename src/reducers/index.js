import { combineReducers } from "redux";
import userReducer from "./userReducer";
import builderReducer from './builder';
import rightPanelReducer from './rightPanel';
import templateReducer from './template';

export default combineReducers({
  user: userReducer,
  builder: builderReducer,
  rightPanel: rightPanelReducer,
  template: templateReducer
});