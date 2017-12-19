import isTruthy from './isTruthy';

function isFalsy(val) {
  if (isTruthy(val)) {
    return false;
  }
  return true;
}

export default isFalsy;
