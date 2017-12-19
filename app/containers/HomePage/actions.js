/*
 *
 * HomePage actions
 *
 */

import {
  CHANGE_TITLE,
  CHANGE_TITLE_SUCCESS,
  CHANGE_TITLE_FAILED,
} from './constants';

export function changeTitle() {
  return {
    type: CHANGE_TITLE,
  };
}

export function changeTitleSuccess(title) {
  return {
    type: CHANGE_TITLE_SUCCESS,
    title,
  };
}

export function changeTitleFailed(error) {
  return {
    type: CHANGE_TITLE_FAILED,
    error,
  };
}
