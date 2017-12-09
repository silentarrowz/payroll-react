import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Home extends Component {
  render() {
    console.log('in home : ', this.props);

    return (


      <div >
    <Link to="/">Home</Link><br/>
    <Link to="/add-employee">Add Employee</Link>
    <Link to="/salary-details">Salary Details</Link>
    <Link to="/salary-sheet">Salary Sheet</Link>


    <h2>This is home page</h2>

  </div>


    );
  }
}

