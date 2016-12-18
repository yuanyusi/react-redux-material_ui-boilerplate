import React, { Component, PropTypes } from 'react';
import SelectFieldSimple from '../components/SelectFieldSimple';
//import UploadPhoto from '../components/UploadPhoto';
//import UploadFilePreview from '../components/UploadFilePreview';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import {
	    FABButton,
		Icon,
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
<Grid style={{margin: '0px'}}>
								<Cell col={4} style={{width: 'calc(50%)'}}>
								
								
											<Textfield
												onChange={() => {}}
												label="Text..."
												floatingLabel
												style={{width: '300px'}}
											/>
											
											<Textfield
												onChange={() => {}}
												pattern="-?[0-9]*(\.[0-9]+)?"
												error="Input is not a number!"
												label="Number..."
												floatingLabel
											/>
											
											<Textfield
												onChange={() => {}}
												label="Text lines..."
												rows={3}
												style={{width: '300px'}}
												floatingLabel
											/>

						</Cell>
						<Cell col={4} style={{width: 'calc(50%)'}}>
											<TextField
											  hintText="Hint Text"
											  floatingLabelText="Fixed Floating Label Text"
											  floatingLabelFixed={true}
											/>
								<SelectFieldSimple />
								
								<DatePicker hintText="Portrait Dialog"  floatingLabelText="Ranged Date Picker" />							
								
	
							</Cell>	
						</Grid>	
        </Dialog>
      </div>
    );
  }
}