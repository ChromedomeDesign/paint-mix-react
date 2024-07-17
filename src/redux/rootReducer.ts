import { combineReducers } from 'redux';
import overflowReducer from './overflowReducer';

const rootReducer = combineReducers({
  overflow: overflowReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
