import { combineReducers } from 'redux-immutable';
import appReducer from 'containers/App/reducer';

export default function createReducer(injectedReducers) {
  return combineReducers({
    global: appReducer,
    ...injectedReducers,
  });
}
