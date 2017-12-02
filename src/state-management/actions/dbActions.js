import db from '../../db';


export function addEmployee(rows, identifier) {
  return {
    type: 'ADD_ROWS_DATA',
    row: { rows, identifier },
  };
  // identifier tells which table to add data to
}


db.employees.put(employeeDetails).
  catch((error) => {
    //
    // Finally don't forget to catch any error
    // that could have happened anywhere in the
    // code blocks above.
    //
    alert(`Ooops: ${error}`);
  }).
    then(data)
