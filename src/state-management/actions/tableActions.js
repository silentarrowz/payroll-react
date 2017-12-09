import uuid from 'uuid';

const tableActions = {
  editRow: (stateItems, rows) => ({
    type: 'EDIT_ROW',
    row: { stateItems, rows },
  }),
  confirmEdit: (property, value, id) => ({
    type: 'CONFIRM_EDIT',
    row: { property, value, id },
  }),
};


export default tableActions;
