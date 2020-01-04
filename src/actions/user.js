import * as constant from '../constants/ActionTypes';
import 'firebase/auth';
import firebase from 'firebase/app';
import _ from 'lodash';

export const checkUserConnection = () => (dispatch, getState) => {
  const user = _.cloneDeep(getState().user);
  const isLoggedIn = !(!_.isUndefined(firebase.auth().currentUser) || user.login == false);
  user.login = isLoggedIn;
  return dispatch({ type: constant.CHECK_USER_CONNECTION, payload: user });
};

export const userConnectionChecked = (data) => (dispatch, getState) => {
  const user = { ...getState().user };

  if (data) {
    user.userCredentials = data;
    user.login = true;
  }

  user.checked = true;
  dispatch({ type: constant.INIT_USER, payload: user });
}

export const userSignIn = (data) => (dispatch, getState) => {
  if (data) {
    const user = { ...getState().user };
    user.userCredentials = data;
    user.login = true;
    dispatch({ type: constant.USER_SIGN_IN, payload: user });
  }
};

export const userLogout = () => (dispatch, getState) => {
  const user = { ...getState().user };
  user.userCredentials = undefined;
  user.login = false;
  dispatch({ type: constant.USER_LOGOUT, payload: user });

  firebase.auth().signOut().then(function () {
    // Sign-out successful.
    console.log("User is successfully logout");
  }).catch(function (error) {
    // An error happened.
    console.log("ERROR HAPPENED: User logout");
  });
};