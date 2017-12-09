import { combineReducers } from 'redux';
import tableReducer from './tableReducer';
import employeeReducer from './employeeReducer';

const rootReducer = combineReducers({
  tableReducer,
  employeeReducer,
});

export default rootReducer;
