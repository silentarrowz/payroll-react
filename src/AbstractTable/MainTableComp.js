

import React from 'react';
import * as edit from 'react-edit';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { AddRowData, editRow } from '../state-management/actions/employeeActions';
import TableDetail from './TableDetail';


class generalTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: this.getColumns(this.props.columns), // initial columns
      showForm: false,

    };
    this.handleAllChange = this.handleAllChange.bind(this);
    this.submitData = this.submitData.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  componentWillMount() {
    console.log('component about to mount');
    this.props.addRowsFunc(this.props.identifier);
    this.setState({
      rowdata: this.props.rows[this.props.identifier],
      whichTable: this.props.identifier,
    });
  }

  getColumns(columns) {
    const editable = edit.edit({
      isEditing: ({ columnIndex, rowData }) => columnIndex === rowData.editing,
      onActivate: ({ columnIndex, rowData }) => {
        // this.props.editRow(columnIndex, rowData.id);

        this.setState({ ...rowData, showForm: true });
      },
      onValue: ({ value, rowData, property }) => {
        this.props.confirmEdit(property, value, rowData.id);
      },
    });

    columns.map((item) => {
      item.cell.transforms = [editable(edit.input())];
    });

    return columns;
  }

  handleAllChange(e) {
    console.log('event : ', e.target.value);
    const itemChanged = e.target.name;
    const newState = { [itemChanged]: e.target.value };
    // [itemChanged] in [] above so it's seen as a variable instead of a string.
    // hence the importance of using [] above

    console.log('newstate is : ', newState);
    this.setState(newState);
  }


  submitData(e) {
    e.preventDefault();
    this.setState({
      showForm: false,
    });
    const stateItems = this.state;

    this.props.editFunc(stateItems, this.props.rowdata);
  }

  closeForm() {
    this.setState({
      showForm: false,
    });
  }

  render() {
    let rowz = '';
    const whichTable = this.props.identifier;

    if (this.props.rows) {
      rowz = this.props.rows[whichTable];
    }

    return (<div>
      {rowz ? (
        <TableDetail
          columns={this.state.columns}
          rows={rowz}
          state={this.state}
          showForm={this.state.showForm}
          handleAllChange={this.handleAllChange}
          submitData={this.submitData}
          closeForm={this.closeForm}
        />
      ) : 'no data in rows'}
    </div>

    );
  }
}

const mapStateToProps = (state) => ({
  rows: state,
});

const mapDispatchToProps = (dispatch) => ({

  addRowsFunc: bindActionCreators(AddRowData, dispatch),

  editFunc: (stateItems, rows) => dispatch(editRow(stateItems, rows)),
  confirmEdit: (property, value, id) => dispatch({
    type: 'CONFIRM_EDIT',
    row: { property, value, id },
  }),
});


const MainTableComp = connect(mapStateToProps, mapDispatchToProps)(generalTable);

export default MainTableComp;
