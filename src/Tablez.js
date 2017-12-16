import React,{Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class Tablez extends Component {
  constructor(props){
    super(props);
    //this.props = this.props.bind(this);
  }
  

  render(){
    let keysForSalaryMonth=Object.keys(this.props.stateprops.salarysheet[this.props.stateprops.salaryForMonth]);
    let salaryProperties = Object.keys(this.props.stateprops.salarysheet[this.props.stateprops.salaryForMonth][keysForSalaryMonth[0]]);
    let salaryObj = this.props.stateprops.salarysheet[this.props.stateprops.salaryForMonth];
  
    return(

      <Table >
    <TableHeader
            displaySelectAll={false}
   adjustForCheckbox={false}
   style={{backgroundColor:'cadetblue'}}
   >
      <TableRow>
        {salaryProperties.map((item,i) => (
          <th key={i}>{item}</th>
        ))}
      </TableRow>
    </TableHeader>
    <TableBody
   displayRowCheckbox={false}
   adjustForCheckbox={false}

    >
      {keysForSalaryMonth.map((epf,i) => (
        <TableRow key={i}>
          {salaryProperties.map((prprty,j) => (
            <TableRowColumn key={j}>{salaryObj[epf][prprty]}</TableRowColumn>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
    )
  }
}