import axios from 'axios';
import _ from 'lodash';
import 'firebase/app';
import firebase from '../../fbConfig';
import * as ActionTypes from '../constants/ActionTypes';
import { basic_fields, special_fields, field_properties } from '../constants/Fields';
import * as uiActions from '../actions/ui';
import { getFieldStyle, toBase64 } from '../helpers';
import * as templateActions from '../actions/template';

export const generatePDF = () => async (dispatch, getState) => {
  const template = _.cloneDeep(getState().template);
  let user = _.cloneDeep(getState().user);

  await dispatch(uiActions.openModal({
    type: "download",
    title: "Resume PDF Generate",
    active: true,
    pdfGenerateStatus: "generating"
  }));

  const response = await dispatch(templateActions.updateResume());
  console.log("RESPONSE:", response);
  const PDF = await axios.post('/api/template/create-pdf', {
    templateID: template.id,
    userID: user.userCredentials.uid,
    pageSize: template.pages.length
  });

  await dispatch(uiActions.updateModal({
    pdfGenerateStatus: "generated",
    downloadLink: PDF.data
  }));
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
    const fieldStyles = getFieldStyle(document.querySelector(`#field_${fieldID} .resume-field-content`), true);
    field.fieldStyle = fieldStyles;

    builder.activeField = field;
    builder.activePage = field.pageID;
    return dispatch({ type: ActionTypes.SET_ACTIVE_FIELD, payload: builder });
  }

  return false;
};

export const removeFieldActive = (fieldID) => async (dispatch, getState) => {
  const builder = _.cloneDeep(getState().builder);

  builder.activeField = "";
  builder.activePage = "";
  return dispatch({ type: ActionTypes.SET_ACTIVE_FIELD, payload: builder });
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

export const getFieldProperties = () => (dispatch, getState) => {
  const builder = _.cloneDeep(getState().builder);
  const { activeField } = builder;

  if (!activeField) { return 'empty settings'; }

  const fieldProperties = field_properties[activeField.type];
  return fieldProperties;
};

export const imageUploaderStart = (file) => async (dispatch, getState) => {
  const builder = _.cloneDeep(getState().builder);

  builder.imageUploader = {
    open: true,
    file: {
      name: file.name,
      src: await toBase64(file),
    }
  };

  dispatch({ type: ActionTypes.IMAGE_UPLOAD_START, payload: builder });
};

export const imageUploaderCancel = () => async (dispatch, getState) => {
  const builder = _.cloneDeep(getState().builder);

  builder.imageUploader = {
    open: false,
    file: null
  }

  dispatch({ type: ActionTypes.IMAGE_UPLOAD_CANCEL, payload: builder });
};

export const imageUploaderDone = (uploadedImageUrl) => async (dispatch, getState) => {
  const builder = _.cloneDeep(getState().builder);
  const template = _.cloneDeep(getState().template);

  const { activeField: { fid } } = builder;
  const fieldIndex = template.items.findIndex(f => f.fid === fid);
  template.items[fieldIndex].value.src = uploadedImageUrl;

  builder.imageUploader = {
    open: false,
    file: null
  };

  dispatch({ type: ActionTypes.IMAGE_UPLOAD_DONE, payload: builder });
  dispatch({ type: ActionTypes.FIELD_ITEM_UPDATE, payload: template })
};