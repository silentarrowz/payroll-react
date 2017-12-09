/* eslint-disable */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import EmployeeForm from './EmployeeForm';
import SalaryDetails from './SalaryDetails';
import SalarySheet from './SalarySheet';
import actions from './state-management/actions/employeeActions';
import Home from './Home';

class App extends Component {
  componentWillMount() {
    const that = this;

    axios.get('http://localhost:8000/get-data').
      then((response) => {
        console.log(response);
        // that.setState({ showDb: response.data, tableArray: { employee: response.data } });
        // console.log(that.state);
        that.props.addRows(response.data);
      }).
      catch((error) => {
        console.log(error);
      });
  }


  render() {
    console.log(this.props.csvData);

    return (
      <Router>


        <div>

          <Route
            exact
            path="/"
            render={() => <Home
              title={'I am Title'}
              status={'Here is my status'}
              // example of passing props to child component with react router
              csvData={this.props.csvData}
            />
            }
          />
          <Route
            path="/add-employee"
            component={EmployeeForm}
                      />
          <Route
            path="/salary-details"
            component={SalaryDetails}
          />
          <Route
            path="/salary-sheet"
            render={() => <SalarySheet
              // example of passing props to child component with react router
              csvData={this.props.csvData['employee']}
            />}
          />

        </div>


      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  csvData: state.employeeReducer,
});

const mapDispatchToProps = (dispatch) => ({
  addRows: (rows) => dispatch(actions.addEmployee(rows)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
