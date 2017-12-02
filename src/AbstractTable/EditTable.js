import React from 'react';
import TextField from 'material-ui/TextField';
import QueueAnim from 'rc-queue-anim';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from '../../node_modules/material-ui/RaisedButton';
//import '../../routes/app/routes/locations/locations.scss';


const style = {
  margin: 12,
};

export default class EditLocation extends React.Component {
  render() {
    const props = this.props;
    const propState = props.state;


    return (
      <div>
        <div className="page-login">
          <div className="main-body">
            <QueueAnim
              type="bottom"
              className="ui-animate"
            >
              <div key="1">
                <MuiThemeProvider>
                  <div className="body-inner">
                    <div className="card bg-white">
                      <div className="card-content">
                        <section className="logo text-center">
                          <h1>Edit Locations</h1>
                        </section>
                        <form className="form-horizontal">
                          <fieldset>
                            {props.columns.map((item, idx) => (
                              <TextField
                                key={idx}
                                floatingLabelText={item.property}
                                name={item.property}
                                value={propState[item.property]}
                                fullWidth
                                onChange={props.handleAllChange}
                              />
                              ))}

                          </fieldset>
                          <RaisedButton
                            label="Cancel"
                            primary
                            style={style}
                            onClick={() => props.closeForm()}
                          />
                          <RaisedButton
                            label="Submit"
                            primary
                            style={style}
                            type="submit"
                            onClick={props.submitData}
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </MuiThemeProvider>
              </div>
            </QueueAnim>
          </div>
        </div>
      </div>
    );
  }
  }

