
const employeeActions = {
  addEmployee: (rows) => ({
    type: 'ADD_EMPLOYEE',
    data: { rows },
  }),
};

export default employeeActions;
