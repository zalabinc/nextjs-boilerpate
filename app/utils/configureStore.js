import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import nextReduxWrapper from 'next-redux-wrapper';
import isEmpty from 'is-empty';

import createReducer from './reducers';
import injectReducer from './injectReducer';
import injectSaga from './injectSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const enhancers = [applyMiddleware(...middlewares)];
const composeEnhancers =
  process.env.NODE_ENV !== 'production' && typeof window === 'object'
    ? composeWithDevTools
    : compose;

export const initRedux = (options) => (BaseComponent) => {
  const hasKey = Reflect.has(options, 'key');
  const hasReducer = Reflect.has(options, 'reducer');
  const hasSaga = Reflect.has(options, 'saga');
  const reducer = hasKey && hasReducer ? { [options.key]: options.reducer } : {};

  const configureStore = (initialState = {}) => {
    const store = createStore(
      createReducer(reducer),
      fromJS(initialState),
      composeEnhancers(...enhancers)
    );
    store.runSaga = sagaMiddleware.run;
    store.injectedReducers = reducer;
    store.injectedSagas = {};
    if (hasSaga) {
      store.injectedSagas[options.key] = { ...options.saga, task: store.runSaga(options.saga) };
    }
    return store;
  };

  const withRedux = nextReduxWrapper(configureStore);
  const withReducer = hasReducer ? injectReducer({ key: options.key, reducer: options.reducer }) : {};
  const withSaga = hasSaga ? injectSaga({ key: options.key, saga: options.saga }) : {};

  const composer = [withRedux];
  if (!isEmpty(withReducer)) composer.push(withReducer);
  if (!isEmpty(withSaga)) composer.push(withSaga);

  return compose(...composer)(BaseComponent);
};
