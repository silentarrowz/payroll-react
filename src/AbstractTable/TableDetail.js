import React from 'react';
import * as Table from 'reactabular-table';
import QueueAnim from 'rc-queue-anim';
import EditTable from './EditTable';


export default class TableDetail extends React.Component {
  render() {
    const { columns, rows, state } = this.props;
    const BodyWrapper = (props) => <tbody {...props} />;
    let whichForm = (<EditTable
      columns={columns}
      rows={rows}
      state={state}
      submitData={this.props.submitData}
      handleAllChange={this.props.handleAllChange}
      closeForm={this.props.closeForm}
    />);

    let whichFunction = this.props.handleAllChange;

    if (this.props.externalFunction) {
      whichFunction = this.props.externalFunction;
    }

    if (this.props.externalForm) {
      const formprops = { columns,
        rows,
        state,
        submitData: this.props.submitData,
        handleAllChange: whichFunction,
        closeForm: this.props.closeForm,
      };

      whichForm = this.props.externalForm(formprops);
    }


    BodyWrapper.shouldComponentUpdate = true;
    const RowWrapper = (props) => <tr {...props} />;

    RowWrapper.shouldComponentUpdate = true;

    return (
      <section className="container-fluid with-maxwidth chapter">
        <QueueAnim
          type="bottom"
          className="ui-animate"
        >
          <article className="article">
            <h2 className="article-title">Employee Details</h2>
            {state.showForm ? (
              whichForm
            ) : (
              <div className="box box-default table-box mdl-shadow--2dp">
                <Table.Provider
                  className="mdl-data-table pure-table pure-table-striped table-wrapper"
                  columns={columns}
                  components={{
                    body: {
                      wrapper: BodyWrapper,
                      row: RowWrapper,
                    },
                  }}
                >
                  <Table.Header />
                  <Table.Body
                    rows={rows}
                    rowKey="id"
                  />
                </Table.Provider>
              </div>
            )}
          </article>
        </QueueAnim>
      </section>

    );
  }
}

