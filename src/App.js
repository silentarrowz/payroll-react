import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import EmployeeForm from './EmployeeForm';
import SalaryDetails from './SalaryDetails';

export class Home extends Component {
  render() {
    return (


      <div >
        <Link to="/">Home</Link><br/>
        <Link to="/add-employee">Add Employee</Link>
        <Link to="/salary-details">Salary Details</Link>

        <h2>This is home page</h2>
      </div>


    );
  }
}

class App extends Component {
/*
  <Link to='/edit-employee' component={EditEmployee}>Edit Employee</Link>

          <Link to='/salary-sheet' component={SalarySheet}>Salary Sheet</Link>

          <Link to='/individual-salary' component={EmployeeForm}>Individual Salary</Link>
*/
  render() {
    return (
      <Router>


        <div>

          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            path="/add-employee"
            component={EmployeeForm}
          />
          <Route
            path="/salary-details"
            component={SalaryDetails}
          />

        </div>


      </Router>
    );
  }
}

export default App;
