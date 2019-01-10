import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_START
} from './types';

export const emailChange = (text) => {
  return {
    type: EMAIL_CHANGE,
    payload: text
  };
};

export const passwordChange = (text) => {
  return {
    type: PASSWORD_CHANGE,
    payload: text
  };
};

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_START });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
    });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_SUCCESS, payload: user });
  Actions.main();
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_FAIL });
};
