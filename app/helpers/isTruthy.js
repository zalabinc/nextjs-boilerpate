import toJS from 'immutable';
import isImmutable from './isImmutable';
import isEmpty from './isEmpty';

function isTruthy(val) {
  if (typeof val === 'boolean' && val === false) {
    return false;
  }
  if (isEmpty(val)) {
    return false;
  }
  if (isImmutable(val)) {
    if (isEmpty(toJS(val))) {
      return false;
    }
  }
  return true;
}

export default isTruthy;
