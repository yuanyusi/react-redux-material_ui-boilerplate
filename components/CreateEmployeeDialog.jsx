import React, { Component, PropTypes } from 'react';

import HorizontalTransition from '../components/HorizontalTransition';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import {
	    FABButton,
		Icon,
		IconButton,
		Grid,
		Cell,
		Textfield,
		MenuItem
} from 'react-mdl';
const styles = {
  radioButton: {
    marginTop: 16,
  },
};

/**
 * Dialog content can be scrollable.
 */
export default class CreateEmployeeDialog extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
	  	<FABButton ripple colored style={{float:"right"}} onClick={this.handleOpen}>
			<Icon name="add" />
		</FABButton>
       
        <Dialog
          title="Create Employee"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
		<div>
		<HorizontalTransition />
				
		  </div>
        </Dialog>
      </div>
    );
  }
}