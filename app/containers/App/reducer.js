/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_LOADING,
  SET_INFO,
  SET_ERROR,
  RESET_UI,
} from './constants';

const initialState = fromJS({
  loading: {},
  info: {},
  error: {},
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return state.set('loading', fromJS(action.loading));
    case SET_INFO:
      return state.set('info', fromJS(action.info));
    case SET_ERROR:
      return state.set('error', fromJS(action.error));
    case RESET_UI:
      return state
        .set('loading', fromJS({}))
        .set('info', fromJS({}))
        .set('error', fromJS({}));
    default:
      return state;
  }
}

export default appReducer;
