/* eslint-disable */

const employeeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE': {
      const dataFromCsv = action.data.rows;
      const newState = Object.assign({}, state, { 'employee': dataFromCsv });

      return newState;
    }
    default:
      return state;
  }
};

export default employeeReducer;
