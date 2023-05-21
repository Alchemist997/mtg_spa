import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import counterReducer from './reducers/counterReducer';

const rootReducer = combineReducers({
  count: counterReducer,
});

const store = createStore(
  rootReducer,
  /* preloadedState, */
  devToolsEnhancer({})
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
