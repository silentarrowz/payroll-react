
const employeeActions = {
  addEmployee: (rows) => ({
    type: 'ADD_EMPLOYEE',
    data: { rows },
  }),

  addSalarySheet: (newState) => ({
    type: 'ADD_SALARY_SHEET',
    data: newState,
  }),
};

export default employeeActions;
