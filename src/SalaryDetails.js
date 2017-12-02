import React, { Component } from 'react';
import {BrowserRouter as Router,  Route,  Link} from 'react-router-dom';
import MainTableComp from './AbstractTable/MainTableComp';
import {Home} from './App';

export default class SalaryDetails extends Component{
   
    render(){
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
              property: 'basicSalary',
              header: {
                label: 'Basic Salary',
              },
              cell: {
                transforms: '',
              },
            },
            {
              property: 'hra',
              header: {
                label: 'HRA',
              },
              cell: {
                transforms: '',
              },
            },
            {
              property: 'otherAllowance',
              header: {
                label: 'Other Allowance',
              },
              cell: {
                transforms: '',
              },
            },
            {
              property: 'grossTotal',
              header: {
                label: 'Gross Total',
              },
              cell: {
                transforms: '',
              },
            },
            {
              property: 'pf',
              header: {
                label: 'PF',
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
                property: 'ptax',
                header: {
                  label: 'PTAX',
                },
                cell: {
                  transforms: '',
                },
              },
              {
                property: 'advance',
                header: {
                  label: 'Advance(if any)',
                },
                cell: {
                  transforms: '',
                },
              },
              {
                property: 'netSalary',
                header: {
                  label: 'Net Salary',
                },
                cell: {
                  transforms: '',
                },
              }
      
          ];

        return(
            <div>
              <Link to='/'>Home</Link>
                <MainTableComp
                columns={columns}
              
                identifier="salary"
              />
 
                </div>
        )
    }
}