import { createStore, combineReducers } from 'redux';

import rootReducer from './root-reducer';
//import tmpReducer from './tmp-reducer';

export default function configureStore(preloadedState) {
  return createStore(
    combineReducers({
      root: rootReducer,
      //tmp: tmpReducer,
    }),
    preloadedState,
  );
}
