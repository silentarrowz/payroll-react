import uuid from 'uuid';
import $ from 'jquery';
import db from '../../db';

export const AddRowData = (identifier) => (dispatch) => {

/*
  function dataFromAjax(dispatch) {
    const root = 'http://localhost:8080/';

    $.ajax({
      url: root + identifier,
      method: 'GET',
      success(data) {
        console.log('data from server : ', data);

        dispatch(addRows(data, identifier));
      },
    });


  }
*/
  // dataFromAjax(dispatch);

  /*
        return (dispatch) => {
      dispatch(addRows(dataFromServer,identifier));
    }
    */
  function dataFromDb(dispatch) {
    db.transaction('r', db.employee, () => {
      db.employee.toArray().then((emp) => {
        console.log('emp is : ', emp);
        const empArr = JSON.stringify(emp);
        const forTable = emp;

        dispatch(addRows(emp, identifier));
        //  this.setState({ showDb: empArr, tableArray: emp });
      });
    });
  }
  dataFromDb(dispatch);
};


export function addRows(rows, identifier) {
  return {
    type: 'ADD_ROWS_DATA',
    row: { rows, identifier },
  };
  // identifier tells which table to add data to
}

export function editRow(stateItems, id) {
  return {
    type: 'EDIT_ROW',
    row: { stateItems, id },
  };
}

export const confirmEdit = (property, value, id) => ({
  type: 'CONFIRM_EDIT',
  row: { property, value, id },
});

