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

const db = new Dexie('newDb');

db.version(2).stores({ employee: '++id, name, pf' });
db.open();

export default db;
