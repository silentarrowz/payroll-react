/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainTableComp from './AbstractTable/MainTableComp';
import SalarySheet from './SalarySheet';


class EmployeeForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      pf: '',
      esi: '',
      location: '',
      joining: '',
      wagesrate:'',
      salary: '',
      showDb: '',
      tableArray: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
/*
  componentWillMount() {
    const that = this;
    axios.get('http://localhost:8000/get-data')
      .then(function (response) {
        console.log(response);
   that.setState({ showDb: response.data, tableArray:{'employee':response.data}  });
   console.log(that.state);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  */

  handleChange(e) {
    const itemChanged = e.target.name;
    const newState = { [itemChanged]: e.target.value };

    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    const that = this;

    function add_new(name, pf, esi, location, joining,wagesrate, salary) {
      // Interact With Database
      axios.post('http://localhost:8000/add-employee', {
        name: name,
        epf: pf,
        esi:esi,
        location:location,
        joining:joining,
        wagesrate:wagesrate,
        salary:salary
      })
      .then(function (response) {
        console.log(response);
   that.setState({ showDb: response.data, tableArray:{'employee':response.data}  });
   console.log(that.state);
      })
      .catch(function (error) {
        console.log(error);
      });
     
  }
  add_new(this.state.name, this.state.pf, this.state.esi, this.state.location, this.state.joining,this.state.wagesrate, this.state.salary);
  
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
        property: 'epf',
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
        property: 'wagesrate',
        header: {
          label: 'Wages Rate',
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

/*
      db.transaction('rw', db.employee, (that) => {
       const insert_object = { name, pf, esi, location, joining,wagesrate, salary };

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
            name="wagesrate"
            placeholder="enter wagesrate"
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
        {this.props.csvData ?
                 (<MainTableComp
                  identifier='employee'
                  history={this.props.history}
                  rowdata={this.props.csvData}
                  columns={columns}
                />)
                 : 'no table data' }

                 <SalarySheet
                 csvData={this.props.csvData['employee']}
                 />
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  csvData: state.employeeReducer,
});

const mapDispatchToProps = (dispatch) => ({
  addRows: (rows) => dispatch(actions.addEmployee(rows)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);


 
