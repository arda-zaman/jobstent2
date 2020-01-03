
import axios from 'axios';
import _ from 'lodash';
import 'firebase/app';
import firebase from '../../fbConfig';
import * as ActionTypes from '../constants/ActionTypes';

const DB = firebase.firestore();

export const initResume = (resumeID) => async (dispatch, getState) => {
  const templateRef = DB.collection('users').doc(resumeID)
  const doc = await templateRef.get().then();

  if (doc && doc.exists) {
    console.log("DOC::", doc);

    return dispatch({ type: ActionTypes.INIT_TEMPLATE, payload: data });
  }

  console.log("DOC couldn't find");
  return false;
};

export const fetchResume = (id, userID = false) => async (dispatch, getState) => {
  const template = _.cloneDeep(getState().template);
  const user = _.cloneDeep(getState().user);
  const userId = userID || user;
  const { resume, docRef } = await getResumeFromDB(template, userId, id);
  return dispatch({ type: ActionTypes.FETCH_TEMPLATE, payload: resume });
};

const getResumeFromDB = async (template, user, id = false) => {
  const userID = user.userCredentials ? user.userCredentials.uid : user;
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
    const templateRef = DB.collection('users').doc(user.userCredentials.uid);
    const doc = await templateRef.get().then();

    if (!doc || !doc.exists) {
      console.log("DOC couldn't find");
      return false;
    }

    const resumeIndex = Object.keys(doc.data()).find(d => d === resumeID);

    if (resumeIndex) {
      template = doc.data()[resumeIndex];
    } else {
      alert("Document couldn't find");
    }
  } else if (typeof template.id === "undefined") {
    template.id = `${timestamp}`;
    template.pages = [{
      type: 'page',
      fid: 1
    }];

    const url = window.location.protocol + "//" + window.location.host + window.location.pathname + '/' + template.id;
    window.history.pushState({ path: url }, '', url);

    const response = DB.collection("users").doc(user.userCredentials.uid).update({
      [template.id]: template
    });

    console.log("RESPONSE:", response);
  }

  return dispatch({ type: ActionTypes.INIT_TEMPLATE, payload: template });
};

export const createResumeItem = ({ type, page, value, style }) => async (dispatch, getState) => {
  const template = _.cloneDeep(getState().template);
  const user = _.cloneDeep(getState().user);
  const { resume, docRef } = await getResumeFromDB(template, user);

  const fid = template.items ? template.items.length + 1 : 1;
  const payload = {
    type,
    fid,
    value,
    style,
    pageID: page
  };

  if (!resume.items) {
    resume.items = [];
  }

  resume.items.push(payload);
  docRef.update({
    [template.id]: resume
  });

  return dispatch({ type: ActionTypes.FIELD_ITEM_CREATED, payload: resume });
};

export const updateResumeItem = ({ fid, value, style }) => async (dispatch, getState) => {
  const template = _.cloneDeep(getState().template);
  const user = _.cloneDeep(getState().user);
  const { resume, docRef } = await getResumeFromDB(template, user);

  const itemIndex = resume.items.findIndex(f => f.fid == fid);
  if (itemIndex == -1) return;

  resume.items[itemIndex] = Object.assign(
    {},
    resume.items[itemIndex],
    value,
    { style: { ...resume.items[itemIndex].style, ...style } }
  );

  docRef.update({
    [template.id]: resume
  });

  return dispatch({ type: ActionTypes.FIELD_ITEM_UPDATE, payload: resume });
}

export const addNewResumePage = () => async (dispatch, getState) => {
  const template = _.cloneDeep(getState().template);
  const user = _.cloneDeep(getState().user);
  const { resume, docRef } = await getResumeFromDB(template, user);

  const pageID = template.pages.length + 1;

  resume.pages.push({
    type: 'page',
    fid: pageID
  });

  const isUpdate = await docRef.update({
    [template.id]: resume
  });

  console.log(isUpdate);

  return dispatch({ type: ActionTypes.ADD_NEW_PAGE, payload: resume });
}