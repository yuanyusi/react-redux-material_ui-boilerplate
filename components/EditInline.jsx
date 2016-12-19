import React, { Component, PropTypes } from 'react';
import InlineEdit from 'react-edit-inline';
import {
		List,
		ListItem,
		ListItemContent
} from 'react-mdl';

export default class EditInline extends React.Component {
  constructor(props) {
    super(props);
        this.dataChanged = this.dataChanged.bind(this);
      this.state = {
        message: 'Bryan Cranston'
      }
	}

	dataChanged(data) {
        // data = { description: "New validated text comes here" }
        // Update your model from here
        console.log(data)
        this.setState({...data})
    }

    customValidateText(text) {
      return (text.length > 0 && text.length < 64);
    }
	
  render() {

    return (
	<div>
            <h2>{this.state.message}</h2>
            <span>JOB DESCRIPTION: </span>
			
			<List>
			  <ListItem> <ListItemContent icon="person" >
			  <InlineEdit
				  validate={this.customValidateText}
				  activeClassName="editing"
				  text={this.state.message}
				  paramName="message"
				  change={this.dataChanged}
				  style={{
					minWidth: 150,
					display: 'inline-block',
					margin: 0,
					padding: 0,
					fontSize: 15,
					outline: 0,
					border: 0
				  }}
				/></ListItemContent>
			  </ListItem>
			  <ListItem>Aaron Paul</ListItem>
			  <ListItem>Bob Odenkirk</ListItem>
			</List>
            
			
        </div>
    )
  }
}
 