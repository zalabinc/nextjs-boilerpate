/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_TITLE_SUCCESS,
} from './constants';

const initialState = fromJS({
  title: '',
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TITLE_SUCCESS:
      return state.set('title', action.title);
    default:
      return state;
  }
}

export default homePageReducer;
