import each from 'lodash/each';
import { END } from 'redux-saga';

export default function monitorSagas(store) {
  const allTasks = [];
  store.dispatch(END);
  each(store.injectedSagas, (saga) => {
    allTasks.push(saga.task);
  });
  return Promise.all(allTasks.map((t) => t.done));
}
