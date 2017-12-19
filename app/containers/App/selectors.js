import { createSelector } from 'reselect';
import isImmutable from 'helpers/isImmutable';

const selectApp = (state) => state.get('global');
const selectLoading = () => createSelector(
  selectApp,
  (subState) => isImmutable(subState.get('loading'))
    ? subState.get('loading').toJS() : {},
);
const selectInfo = () => createSelector(
  selectApp,
  (subState) => isImmutable(subState.get('info'))
    ? subState.get('info').toJS() : {},
);
const selectError = () => createSelector(
  selectApp,
  (subState) => isImmutable(subState.get('error'))
    ? subState.get('error').toJS() : {},
);

export {
  selectLoading,
  selectInfo,
  selectError,
};
