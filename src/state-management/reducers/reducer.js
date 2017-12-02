import { cloneDeep, findIndex, merge } from 'lodash';
// import initialState from './initialState';


const reducer = (state = {}, action) => {
  const row = action.row;
  const index = row && findIndex(state, { id: row.id });

  switch (action.type) {
    case 'ADD_ROWS_DATA': {
      console.log(row.rows);

      const whichTable = action.row.identifier;
      const newState = merge({}, state, { [whichTable]: row.rows });
      // have to make sure that this merging
      // doesnt wipe out another table's data

      console.log('row added to state : ', newState);

      return newState;
    }
    case 'EDIT_ROW': {
      const tableToEdit = action.row.stateItems.whichTable;

      if (state) {
        const editingState = cloneDeep(state);
        const tableEditing = editingState[tableToEdit];

        for (let i = 0; i < tableEditing.length; i++) {
          Object.keys(tableEditing[i]).forEach((item) => {
            if (tableEditing[i].id === action.row.stateItems.id) {
              tableEditing[i][item] = action.row.stateItems[item];
            }
          });
        }
        console.log(editingState);

        return editingState;

        /*
          if(editingRows[tableToEdit]){
            for(let i=0;i<editingRows[tableToEdit].length;i++){
             if(editingRows[tableToEdit][i].id === action.row.stateItems.id){
              Object.keys(editingRows[tableToEdit][i]).forEach((item)=>{
                editingRows[tableToEdit][i][item]=action.row.stateItems[item];
              });
             }
            }
            console.log('editingRows is : ',editingRows);
            const newState = merge({},state,editingRows);
            console.log('newState is : ',newState);
             console.log('editingRows is : ',editingRows);
             return newState;
          }else{
            const newRows = action.row.rows;
            for(let i =0;i<newRows[tableToEdit].length;i++){
              if(newRows[tableToEdit][i].id === action.row.stateItems.id){
                Object.keys(newRows[tableToEdit][i]).forEach((item)=>{
                  newRows[tableToEdit][i][item]=action.row.stateItems[item];
                });
              }
            }
            console.log('newRows is : ',newRows);
            const newState = merge({},state,newRows);
            console.log('newState is : ',newState);
            return newState;
          }
         //const newRowData = action.row.rows;


      }else{
        const newRows = action.row.rows;
        for(let i =0;i<newRows[tableToEdit].length;i++){
          if(newRows[tableToEdit][i].id === action.row.stateItems.id){
            Object.keys(newRows[tableToEdit][i]).forEach((item)=>{
              newRows[tableToEdit][i][item]=action.row.stateItems[item];
            });
          }
        }
        console.log('newRows is : ',newRows);
        const newState = merge({},newRows);
        console.log('newState is : ',newState);
        return newState;
      }

   */
      }
    }

    case 'CONFIRM_EDIT': {
      if (index >= 0) {
        return editProperty(state, index, {
          [row.property]: row.value,
          // editing: false
        });
      }
    }
    default:
      return state;
  }
};


function editProperty(rows, index, values) {
  // Skip mutation, there's likely a neater way to achieve this
  const ret = cloneDeep(rows);

  console.log('ret before loop : ', ret);
  Object.keys(values).forEach((v) => {
    ret[index][v] = values[v];
  });
  console.log('ret after loop : ', ret);

  return ret;
}

export default reducer;
