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

    /*
    db.transaction('rw', db.employee, (that) => {
    // Let's add some data to db:
      // const insert_object = { name, email };

      db.employee.each(emp => console.log(emp));
    // db.employee.add(insert_object);
    }).
      then((result) => {
        // document.write(JSON.stringify (result));
        console.log(JSON.stringify(result));
        that.setState({ tableArray: JSON.stringify(result) });
      }).
      catch((e) => {
        console.log('error is : ', e);
      });
      */
    db.transaction('r', db.employee, () => {
      db.employee.toArray().then((emp) => {
        console.log('emp is : ', emp);
        const empArr = JSON.stringify(emp);
        const forTable = emp;

        this.setState({ showDb: empArr, tableArray: emp });
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

    function add_new(name, email) {
      // Interact With Database


      db.transaction('rw', db.employee, (that) => {
        // Let's add some data to db:
        const insert_object = { name, email };

        db.employee.add(insert_object);
      }).then(() => db.employee.toArray()).
        then((result) => {
        // document.write(JSON.stringify (result));
          console.log(JSON.stringify(result));
          that.setState({ tableArray: JSON.stringify(result) });
        }).
        catch((e) => {
          console.log('error is : ', e);
        });
    }
    add_new(this.state.name, this.state.pf, this);
  }

  render() {
    const columns = [
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
        property: 'email',
        header: {
          label: 'Email',
        },
        cell: {
          transforms: '',
        },
      },
      {
        property: 'id',
        header: {
          label: 'ID',
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
          />

          <input
            type="text"
            name="location"
            placeholder="enter location"
          />

          <input
            type="text"
            name="joining"
            placeholder="enter joining data"
          />

          <input
            type="text"
            name="salary"
            placeholder="enter salary"
          />

          <input
            type="submit"
            value="Submit"
            onClick={this.handleSubmit}
          />


        </form>
        <br/>
        {this.state.showDb ? this.state.showDb : 'no data yet'}
        <MainTableComp
          identifier="employee"
          columns={columns}
        />
      </div>
    );
  }
}
