/* import Dexie from 'dexie';

const db = new Dexie('employeeDb');

db.version(1).stores({
  employees: 'name,pf,esi,joining,location,salary',
});
db.open().catch((error) => {
  alert(`Uh oh : ${error}`);
});
*/

import Dexie from 'dexie';

const db = new Dexie('EmployeeDb');

db.version(3).stores({ employee: '++id, name, pf,esi,location,joining,salary' });
db.version(4).stores({ employee: '++id, name, pf,esi,location,joining,wagesrate,salary' });


db.open();

export default db;
