/* eslint-disable */
import $ from 'jquery';

const employeeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE': {
      const dataFromCsv = action.data.rows;
      const newState = Object.assign({}, state, { 'employee': dataFromCsv });

      return newState;
    }
    
    case 'ADD_SALARY_SHEET':{
      const salarySheetData = action.data;
      const salaryState = $.extend(true,{},state,salarySheetData);
      return salaryState;
    }
    default:
      return state;
  }
};

export default employeeReducer;
