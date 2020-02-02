
import axios from 'axios';
import _ from 'lodash';
import 'firebase/app';
import firebase from '../../fbConfig';
import * as ActionTypes from '../constants/ActionTypes';
import * as uiActions from '../actions/ui';

const DB = firebase.firestore();

export const fetchResume = (id, userID = false) => async (dispatch, getState) => {
  const user = _.cloneDeep(getState().user);
  const { resume, docRef } = await getResumeFromDB({ user, user_id: userID, id });
  return dispatch({ type: ActionTypes.FETCH_TEMPLATE, payload: resume });
};

const getResumeFromDB = async ({ template, user, user_id, id = false, showError = false, dispatch = undefined }) => {
  const userID = user.userCredentials ? user.userCredentials.uid : user_id;

  if (!userID && showError) {
    await dispatch(uiActions.openModal({
      type: "warning",
      title: 'Warning!',
      text: 'Please logged in before',
      active: true
    }));
  }

  if (!userID) return false;

  const docRef = firebase.firestore().collection("users").doc(userID);
  const resumeData = await (await docRef.get().then()).data();
  const resumeIndex = Object.keys(resumeData).find(r => r == (id ? id : template.id));
  const resume = resumeData[resumeIndex];

  return { resume, docRef };
}

export const generateResume = (resumeID) => async (dispatch, getState) => {
  let template = _.cloneDeep(getState().template);
  let user = _.cloneDeep(getState().user);
  const timestamp = new Date().getTime();

  if (resumeID && typeof template.id === "undefined") {
    const { resume, docRef } = await getResumeFromDB({ template, user, id: resumeID, showError: true, dispatch });

    if (!resume) {
      await dispatch(uiActions.openModal({
        type: "warning",
        title: 'Warning!',
        text: 'Resume couldn\'t find',
        active: true
      }));
      return false;
    }

    template = resume;
  } else if (typeof template.id === "undefined") {
    template.id = `${timestamp}`;
    template.pages = [{
      type: 'page',
      fid: 1,
      order: 1
    }];

    const url = window.location.protocol + "//" + window.location.host + window.location.pathname + '/' + template.id;
    window.history.pushState({ path: url }, '', url);

    const response = await DB.collection("users").doc(user.userCredentials.uid).set({
      [template.id]: template
    }, { merge: true });

    console.log("RESPONSE:", response);
  }

  return dispatch({ type: ActionTypes.INIT_TEMPLATE, payload: template });
};

export const updateResume = () => async (dispatch, getState) => {
  let template = _.cloneDeep(getState().template);
  let user = _.cloneDeep(getState().user);

  const { resume, docRef } = await getResumeFromDB({ template, user });
  try {
    const response = await docRef.update({
      [template.id]: template
    });
  } catch (err) {
    console.log("RES::", err);
    // TODO: Change modal type as failed.
  }

  if (docRef) { }
  return dispatch({ type: ActionTypes.GENERATE_TEMPLATE, payload: template });
}

export const createResumeItem = ({ type, page, value, style, fieldStyle }) => async (dispatch, getState) => {
  const template = _.cloneDeep(getState().template);
  const user = _.cloneDeep(getState().user);
  // const { resume, docRef } = await getResumeFromDB(template, user);

  const fid = template.items ? template.items.length + 1 : 1;
  const payload = {
    type,
    fid,
    value,
    style,
    fieldStyle,
    pageID: page
  };

  if (!template.items) {
    template.items = [];
  }

  template.items.push(payload);
  // docRef.update({
  //   [template.id]: template
  // });

  return dispatch({ type: ActionTypes.FIELD_ITEM_CREATED, payload: template });
};

export const updateResumeItem = ({ fid, pageID, value, style, fieldStyle }) => async (dispatch, getState) => {
  const template = _.cloneDeep(getState().template);
  const user = _.cloneDeep(getState().user);
  // const { resume, docRef } = await getResumeFromDB(template, user);

  const itemIndex = template.items.findIndex(f => f.fid == fid);
  if (itemIndex == -1) return;

  const currentItem = _.cloneDeep(template.items[itemIndex]);

  template.items[itemIndex] = {
    ...template.items[itemIndex],
    pageID,
    value: { ...currentItem.value, ...value },
    style: { ...currentItem.style, ...style },
    fieldStyle: { ...currentItem.fieldStyle, ...fieldStyle }
  };

  // docRef.update({
  //   [template.id]: template
  // });

  return dispatch({ type: ActionTypes.FIELD_ITEM_UPDATE, payload: template });
}

export const addNewResumePage = (e) => async (dispatch, getState) => {
  const template = _.cloneDeep(getState().template);
  const currentPageOrder = e.target.closest('.page').getAttribute('order');
  // const user = _.cloneDeep(getState().user);

  // const { resume, docRef } = await getResumeFromDB(template, user);

  const pageID = template.pages.length + 1;
  const orderID = parseInt(currentPageOrder) + 1;

  template.pages = template.pages.map(p => {
    if (p.order >= orderID) {
      p.order += 1;
      return p;
    }
    return p;
  });

  template.pages.push({
    type: 'page',
    fid: pageID,
    order: orderID
  });

  template.pages = _.sortBy(template.pages, ['order']);

  // const isUpdate = await docRef.update({
  //   [template.id]: resume
  // });

  // console.log(isUpdate);

  return dispatch({ type: ActionTypes.ADD_NEW_PAGE, payload: template });
}

export const removeResumePage = (e) => async (dispatch, getState) => {
  const template = _.cloneDeep(getState().template);
  const pageID = e.target.closest('.page').id.split('_')[1];
  const resume = template;

  if (template.pages.length == 1) {
    await dispatch(uiActions.openModal({
      type: "alert",
      title: 'Alert!',
      text: 'At least, your resume have to one page',
      active: true
    }));
    return;
  }

  await dispatch(uiActions.openModal({
    type: "delete",
    title: 'Removing Page',
    text: "Are you sure about removing to the Page?",
    active: true,
    confirm: function () {
      resume.pages = resume.pages.filter(p => p.fid != pageID);
      dispatch({ type: ActionTypes.REMOVE_PAGE, payload: resume });
      dispatch(uiActions.closeModal());
    }
  }));
}