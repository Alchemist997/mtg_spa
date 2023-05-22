import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reviewsReducer from './reducers/reviewsReducer';

const rootReducer = combineReducers({
  reviews: reviewsReducer,
});

const store = createStore(
  rootReducer,
  /* preloadedState, */
  devToolsEnhancer({})
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
