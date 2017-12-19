import { createSelector } from 'reselect';
// import isTruthy from 'helpers/isTruthy';
// import isFalsy from 'helpers/isFalsy';
// import isImmutable from 'helpers/isImmutable';

const selectHomePage = (state) => state.get('homePage');

const selectTitle = () => createSelector(
  selectHomePage,
  (substate) => substate.get('title')
);

export {
  selectTitle,
};
