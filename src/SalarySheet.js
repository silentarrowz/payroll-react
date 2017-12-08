import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import db from './db';
import MainTableComp from './AbstractTable/MainTableComp';

export default class SalarySheet extends Component {
  render() {
    return (
      <div >
        <h2>Salary Sheet</h2>
      </div>);
  }
}
