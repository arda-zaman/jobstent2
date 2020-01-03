import axios from 'axios';
import _ from 'lodash';
import 'firebase/app';
import firebase from '../../fbConfig';
import * as ActionTypes from '../constants/ActionTypes';
import { basic_fields, special_fields } from '../constants/Fields';

const DB = firebase.firestore();

export const generatePDF = () => async (dispatch, getState) => {
  const template = _.cloneDeep(getState().template);
  let user = _.cloneDeep(getState().user);

  axios.post('/api/template/create-pdf', {
    templateID: template.id,
    userID: user.userCredentials.uid
  }).then(res => {
    const anchorTag = document.createElement('a');
    anchorTag.href = res.data;
    anchorTag.download = "My PDF File.pdf";
    anchorTag.click();
  });
};

export const getFieldDefault = (type) => {
  const arr = basic_fields.concat(special_fields);
  return arr.find(f => f.type === type);
};

export const makeFieldActive = (fieldID) => async (dispatch, getState) => {
  const template = _.cloneDeep(getState().template);
  const builder = _.cloneDeep(getState().builder);

  const field = template.items ? template.items.find(f => f.fid == fieldID) : false;

  if (field) {
    builder.activeField = field;
    return dispatch({ type: ActionTypes.SET_ACTIVE_FIELD, payload: builder });
  }

  return false;
};

export const leftPanelListHandler = (panelType) => (dispatch, getState) => {
  const builder = _.cloneDeep(getState().builder);
  builder[panelType] = builder[panelType] == 'open' ? 'closed' : 'open';
  dispatch({ type: ActionTypes.LEFT_PANEL_MENU_HANDLER, payload: builder });
};

/*** RIGHT PANEL  ***/
export const rightPanelMenuSwitch = (data) => (dispatch, getState) => {
  const rightPanel = _.cloneDeep(getState().rightPanel);
  rightPanel.activeMenu = data;
  dispatch({ type: ActionTypes.RIGHT_PANEL_MENU_SWITCH, payload: rightPanel });
};