import nodeReducer from './nodeReducer';
import bundleReducer from './bundleReducer'
import { combineReducers } from 'redux';


const reducers = combineReducers({
  nodes: nodeReducer,
  bundle: bundleReducer
});

export default reducers;

// weird syntax comes from typescript-redux.
export type RootState = ReturnType<typeof reducers>;
