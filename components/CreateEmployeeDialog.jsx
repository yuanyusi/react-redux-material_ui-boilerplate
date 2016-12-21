import React, { Component, PropTypes } from 'react';
import SelectFieldSimple from '../components/SelectFieldSimple';
import SelectFieldDivision from '../components/SelectFieldDivision';
import ImageUpload from '../components/ImageUpload';

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
				<Grid style={{margin: '0px', padding: '0px 0px 0px 12px'}}>
					<Cell col={6} style={{minWidth: '270px'}}>							
						
						<TextField
						  hintText="First Name"
						  floatingLabelText="First Name"
						  floatingLabelFixed={true}
						/>
						
						<TextField
						  hintText="Last Name"
						  floatingLabelText="Last Name"
						  floatingLabelFixed={true}
						/>
						
						<TextField
						  hintText="Gender"
						  floatingLabelText="Gender"
						  floatingLabelFixed={true}
						/>
						<div >
						<IconButton name = 'date_range' style = {{float: 'left', top: '30px', left:'220px', color:'rgba(0, 0, 0, 0.298039)' }}/>
						<DatePicker 
							floatingLabelText="Date Of Birth"
							floatingLabelFixed={true}
							hintText="Date of Birth" 
							container="inline" 
							autoOk={true}
							textFieldStyle = {{display: 'inherit', position: 'relative'}}
						/>		
						</div>
						<TextField
						  hintText="Nationality"
						  floatingLabelText="Nationality"
						  floatingLabelFixed={true}
						/>
						
						<TextField
						  hintText="Marital Status"
						  floatingLabelText="Marital Status"
						  floatingLabelFixed={true}
						/>
						
						<TextField
						  hintText="Phone"
						  floatingLabelText="Phone"
						  floatingLabelFixed={true}
						/>
					</Cell>
				<Cell col={5} style={{minWidth: '270px'}}>
									<TextField
									  hintText="Sub Division"
									  floatingLabelText="Sub Division"
									  floatingLabelFixed={true}
									/>

									<TextField
									  hintText="Status"
									  floatingLabelText="Status"
									  floatingLabelFixed={true}
									/>
									<TextField
									  hintText="Suspend Date"
									  floatingLabelText="Suspend Date"
									  floatingLabelFixed={true}
									/>
									<div >
										<IconButton name = 'date_range' style = {{float: 'left', top: '30px', left:'220px', color:'rgba(0, 0, 0, 0.298039)' }}/>
										<DatePicker 
											floatingLabelText="Hired Date"
											floatingLabelFixed={true}
											hintText="Hired Date" 
											container="inline" 
											autoOk={true}
											textFieldStyle = {{display: 'inherit', position: 'relative'}}
										/>		
									</div>
									<SelectFieldSimple />
									<SelectFieldDivision />
									<TextField
									  hintText="Email"
									  floatingLabelText="Email"
									  floatingLabelFixed={true}
									/>
									
						
						
					</Cell>	
					<Cell col={1} style={{minWidth: '100px'}}>							
					<ImageUpload image='' style={{float:'right'}}/>
					</Cell>
				</Grid>	
		  </div>
        </Dialog>
      </div>
    );
  }
}