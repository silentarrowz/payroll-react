/*eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainTableComp from './AbstractTable/MainTableComp';

export default class SalarySheet extends Component {
 constructor(props){
   super(props);

 }
  render() {
    console.log('salary sheet :', this.props.csvData);
    return (
      <div >
        <h2>Salary Sheet</h2>
        <Link to="/">Home</Link><br/>
    {this.props.csvData?this.props.csvData.map((item)=>item.name) :''}
              </div>
    );
 }
}