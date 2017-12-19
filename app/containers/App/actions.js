/*
 *
 * App actions
 *
 */

import isFalsy from 'helpers/isFalsy';

import {
  SET_LOADING,
  SET_ERROR,
  SET_INFO,
  RESET_UI,
} from './constants';

export function setLoading({ name, message = '', data = {} }) {
  const loading = isFalsy(name) ? {} : { name, message, data };
  return {
    type: SET_LOADING,
    loading,
  };
}
export function setError({ name, message = '', data = {} }) {
  const error = isFalsy(name) ? {} : { name, message, data };
  return {
    type: SET_ERROR,
    error,
  };
}
export function setInfo({ name, message = '', data = {} }) {
  const info = isFalsy(name) ? {} : { name, message, data };
  return {
    type: SET_INFO,
    info,
  };
}

export function resetUI() {
  return {
    type: RESET_UI,
  };
}
