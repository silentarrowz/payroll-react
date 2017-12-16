import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const EsiTable = (props) => {
  console.log('esitable props : ', props);

  return (
    <div>
      <h2>ESI Details</h2>
      <Table style={{ width: '400px', border: '' }} >
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
          style={{ backgroundColor: 'cadetblue' }}
        >
          <TableRow><TableRowColumn>Name</TableRowColumn>
            <TableRowColumn>Days</TableRowColumn>
            <TableRowColumn>Esi</TableRowColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
          adjustForCheckbox={false}
        >
          {props.epfs.map((epf, idx) =>
            <TableRow><TableRowColumn>{props.esiprops[epf].name}</TableRowColumn>
              <TableRowColumn>{props.esiprops[epf].days}</TableRowColumn>
              <TableRowColumn>{props.esiprops[epf].totalAmount}</TableRowColumn>
            </TableRow>

          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default EsiTable;
