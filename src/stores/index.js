import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import { thunk } from 'redux-thunk';

import conditionsReducer from './conditions';
import locationReducer from './location';
import settingsReducer from './settings';

const middleware = [
  thunk,
];

const reducers = combineReducers({
  settings: settingsReducer,
  location: locationReducer,
  conditions: conditionsReducer,
});

const composeEnhancers = typeof window === 'object'
  && process.env.NODE_ENV !== 'production'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

const store = createStore(reducers, enhancer);

export default store;
