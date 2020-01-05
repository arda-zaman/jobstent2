import axios from 'axios';
import _ from 'lodash';
import * as ActionTypes from '../constants/ActionTypes';


export const openModal = (options) => async (dispatch, getState) => {
  const ui = _.cloneDeep(getState().ui);
  ui.modal = { ...options };
  return dispatch({ type: ActionTypes.OPEN_MODAL, payload: ui });
};

export const closeModal = () => async (dispatch, getState) => {
  const ui = _.cloneDeep(getState().ui);
  ui.modal = { active: false };
  dispatch({ type: ActionTypes.CLOSE_MODAL, payload: ui });
};

export const updateModal = (options) => async (dispatch, getState) => {
  const ui = _.cloneDeep(getState().ui);
  ui.modal = Object.assign({}, { ...ui.modal }, { ...options });
  dispatch({ type: ActionTypes.UPDATE_MODAL, payload: ui });
};