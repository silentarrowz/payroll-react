/*eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MainTableComp from './AbstractTable/MainTableComp';
import actions from './state-management/actions/employeeActions';
import $ from 'jquery';

class Tablez extends Component {
  constructor(props){
    super(props);
    //this.props = this.props.bind(this);
  }
/*
 return (<table>
   { keysForSalaryMonth.forEach((item)=>{
     
    salaryProperties.map((prop)=>{
     return(
       <tbody>
       <tr><th>{prop}{item} </th></tr>
       <tr>
         <td>{salaryObj[item][prop]} </td>
         </tr>
</tbody>
     );
    })
       
    })
  }
</table>);

*/


  render(){
    let keysForSalaryMonth=Object.keys(this.props.stateprops.salarysheet[this.props.stateprops.salaryForMonth]);
    let salaryProperties = Object.keys(this.props.stateprops.salarysheet[this.props.stateprops.salaryForMonth][keysForSalaryMonth[0]]);
    let salaryObj = this.props.stateprops.salarysheet[this.props.stateprops.salaryForMonth];
    console.log(salaryObj[keysForSalaryMonth[0]][name]);
  const trowz = (<table><th>
    {salaryProperties.map((item)=>
      <td>{item}</td>
    )}
    </th>
     </table>
  );
  
  const tvalues = (<table>
     { keysForSalaryMonth.map((epf)=>{
      return  (<tr>
       {salaryProperties.map((prprty)=>
      <td>{salaryObj[epf][prprty]} </td> 
        
      )}
    </tr>)
    }
    )}
 
      </table>);
    
    return(
      <ul>
        {trowz}
      {tvalues}
        </ul>
    )
  }
}


class SalarySheet extends Component {
 constructor(props){
   super(props);
  this.state= {

  }
 this.handleMonth = this.handleMonth.bind(this); 
 this.handleDays = this.handleDays.bind(this);
 this.findepf = this.findepf.bind(this);
 this.handleDaySubmit = this.handleDaySubmit.bind(this);
 }

 findepf(item,epf){
   if(item.epf===epf){
     return item;
   }
 }

 handleDaySubmit(e){
  e.preventDefault();
this.props.addSalarySheet(this.state.salarysheet);
}


handleDays(e){
let days = e.target.value;
let epf = e.target.name;
let salaryMonth = this.state.salaryForMonth;
let obj = this.props.csvData.find((item)=>this.findepf(item,epf));
let name = obj.name;
let basicSalary = obj.salary;
let wagesrate = obj.wagesrate;
let totalWages = days*wagesrate;
let da = days*227.3;
let totalAmountPayable = Math.round(totalWages+da);
let hra = Math.round((5*totalAmountPayable)/100);
let totalAmount = totalAmountPayable+hra;
let pfValue = Math.round((12*totalAmountPayable)/100);
let esiValue = Math.round((1.75*totalAmount)/100);
let pTax;
let totalDeduction;
if(pTax){
   totalDeduction = pfValue+esiValue+pTax;
  
}
 totalDeduction = pfValue+esiValue;
 let amtPaid = totalAmount - totalDeduction;
 let newState = $.extend(true,{},this.state, {'salarysheet':{
  [salaryMonth]:{
    [epf]:{
      name,
      epf,
      hra,
      days,
      wagesrate,
      basicSalary,
      totalWages,
      totalAmountPayable,
      da,
      totalAmount,
      pfValue,
      esiValue,
      pTax,
      totalDeduction,
    }
  }
}
});
//var prevState = {[date]:{}};
//var newState = {[date]:{[epf]:{hra:'999'}}};
this.setState($.extend(true,{},this.state, {'salarysheet':{
    [salaryMonth]:{
      [epf]:{
        name,
        epf,
        hra,
        days,
        wagesrate,
        basicSalary,
        totalWages,
        totalAmountPayable,
        da,
        totalAmount,
        pfValue,
        esiValue,
        pTax,
        totalDeduction,

      
      }
    }
  }
  }
)
);
}

handleMonth(){
  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  var d = new Date();
  var yyyy=d.getFullYear();
  var mm = d.getMonth();
  var monthName = monthNames[mm-1];
  var salaryForMonth = mm.toString()+yyyy.toString();
  var dateDisplay = monthName +' '+yyyy;
  this.setState({
    date:dateDisplay,
    salaryForMonth:salaryForMonth,
    [salaryForMonth]:{
      sdf:'name'
    }
  })
}
componentDidMount(){
 
  this.handleMonth();
}


  render() {
    console.log('salary sheet :', this.props.csvData);
    let salaryProperties='';
    let objs = '';
    if(this.state.salarysheet && this.state.salaryForMonth){

      }
let daysForm;
      if(this.props.csvData){
        daysForm = (<table>
       { this.props.csvData.map((item)=>{
          return (
            <tbody>
            <tr> <td> {item.epf}</td>
            <td>{item.name}</td>
            <td> <input type="text"
             placeholder="enter days"
              name={item.epf}
              onChange={this.handleDays}
              />  </td>
               </tr>
               </tbody>
          )
        })
      }
        </table>
      );
      }
    return (
      <div >
        <h2>Salary Sheet</h2>
        <h2>For the Month : {this.state.date}</h2>
        <Link to="/">Home</Link><br/>
       {daysForm}
  <button onClick={this.handleDaySubmit} >Submit </button>
{(this.state.salarysheet && this.state.salaryForMonth)?  (<Tablez stateprops={this.state} />):''
}
              </div>
    );
 }
}


const mapStateToProps = (state) => ({
  salaryData: state.employeeReducer,
});

const mapDispatchToProps = (dispatch) => ({
  addSalarySheet: (newState) => dispatch(actions.addSalarySheet(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SalarySheet);
