/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import db from './db';
import MainTableComp from './AbstractTable/MainTableComp';

export default class EmployeeForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      pf: '',
      esi: '',
      location: '',
      joining: '',
      salary: '',
      showDb: '',
      tableArray: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    const that = this;
    db.transaction('r', db.employee, () => {
      db.employee.toArray().then((emp) => {
        console.log('emp is : ', emp);
        const empArr = JSON.stringify(emp);
        const forTable = { 'employee': emp };

        this.setState({ showDb: empArr, tableArray: forTable });
      });
    });
  }

  handleChange(e) {
    const itemChanged = e.target.name;
    const newState = { [itemChanged]: e.target.value };

    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    const that = this;

    function add_new(name, pf, esi, location, joining, salary) {
      // Interact With Database


      db.transaction('rw', db.employee, (that) => {
        // Let's add some data to db:
        const insert_object = { name, pf, esi, location, joining, salary };

        db.employee.add(insert_object);
      }).then(() => db.employee.toArray()).
        then((result) => {
        // document.write(JSON.stringify (result));
          console.log(JSON.stringify(result));
          const toTable = { employee: result };

          that.setState({ showDb: JSON.stringify(result), tableArray: toTable });
        }).
        catch((e) => {
          console.log('error is : ', e);
        });
    }
    add_new(this.state.name, this.state.pf, this.state.esi, this.state.location, this.state.joining, this.state.salary);
  }

  render() {
    const columns = [
      {
        property: 'id',
        header: {
          label: 'ID',
        },
        cell: {
          transforms: '',
        },
      },
      {
        property: 'name',
        header: {
          label: 'Name',
        },
        cell: {
          transforms: '',
        },
      },
      {
        property: 'pf',
        header: {
          label: 'EPF No.',
        },
        cell: {
          transforms: '',
        },
      },
      {
        property: 'esi',
        header: {
          label: 'ESI',
        },
        cell: {
          transforms: '',
        },
      },
      {
        property: 'location',
        header: {
          label: 'Location',
        },
        cell: {
          transforms: '',
        },
      },
      {
        property: 'joining',
        header: {
          label: 'Joining Date',
        },
        cell: {
          transforms: '',
        },
      },
      {
        property: 'salary',
        header: {
          label: 'Salary',
        },
        cell: {
          transforms: '',
        },
      },


    ];

    /* <MainTableComp
          rowkadata={this.state.tableArray}
          columns={columns}
        />

*/

    return (
      <div>
        <Link to="/">Home</Link><br/>
        <Link to="/salary-details">Salary Details</Link>

        <form>
          <input
            type="text"
            name="name"
            placeholder="enter name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="pf"
            placeholder="enter pf"
            onChange={this.handleChange}

          />

          <input
            type="text"
            name="esi"
            placeholder="enter esi"
            onChange={this.handleChange}

          />

          <input
            type="text"
            name="location"
            placeholder="enter location"
            onChange={this.handleChange}

          />

          <input
            type="text"
            name="joining"
            placeholder="enter joining data"
            onChange={this.handleChange}

          />

          <input
            type="text"
            name="salary"
            placeholder="enter salary"
            onChange={this.handleChange}

          />

          <input
            type="submit"
            value="Submit"
            onClick={this.handleSubmit}
          />


        </form>
        <br/>
        {this.state.showDb ? this.state.showDb : 'no data yet'}
        {this.state.tableArray ?
         (<MainTableComp
          identifier="employee"
          rowdata={this.state.tableArray}
          columns={columns}
        />)
         : 'no table data'}
      </div>
    );
  }
}
