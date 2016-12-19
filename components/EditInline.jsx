import React, { Component, PropTypes } from 'react';
import InlineEdit from 'react-edit-inline';
import {
		List,
		ListItem,
		ListItemContent
} from 'react-mdl';
const desc = [
			'Optimize performance at customer projects',
			'Working & implementing web portal using Liferay & gatein portal Internet banking system',
			'Managing & deploying & releasing production',
			'Lead IMB ODC team (7 members)',
			'Tools & Technology: InteliJ IDE, Jenkins, Git, Maven, sorna',
			'Other'
			];
export default class EditInline extends React.Component {
  constructor(props) {
    super(props);
        this.dataChanged = this.dataChanged.bind(this);
      this.state = {
        message: desc
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
            <span>JOB DESCRIPTION: </span>
			
			<List >
			{this.state.message.map((c) => (
			  <ListItem style={{display:'block',padding:'0px', minHeight: '2px'}}> <ListItemContent icon="radio_button_checked" >
			  <InlineEdit
				  validate={this.customValidateText}
				  activeClassName="editing"
				  text={c}
				  paramName="message"
				  change={this.dataChanged}
				  style={{
					minWidth: 500,
					display: 'inline-block',
					margin: 0,
					padding: 0,
					fontSize: 14,
					outline: 0,
					border: 0
				  }}
				/></ListItemContent>
			  </ListItem>
			))}
			</List>
        </div>
    )
  }
}
 