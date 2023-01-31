import {combineReducers} from 'redux';
import {reducer as useReducer} from './user/reducers';

const reducer = combineReducers({
  user: useReducer,
});

export {reducer};
