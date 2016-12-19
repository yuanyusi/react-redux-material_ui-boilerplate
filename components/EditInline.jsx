import React, { Component, PropTypes } from 'react';
import InlineEdit from 'react-edit-inline';
import {
		List,
		ListItem,
		ListItemContent,
		IconButton
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
         this.dataCreated = this.dataCreated.bind(this);
         this.datadDeleted = this.datadDeleted.bind(this);
      this.state = {
        message: desc
      }
	}

	dataChanged(index, data) {
        // data = { description: "New validated text comes here" }
        // Update your model from here
       this.setState({ message: [
       ...this.state.message.slice(0,index),
       data.desc,
        ...this.state.message.slice(index + 1)
        ] });

    }

    datadDeleted(index) {
       this.setState({ message: [
       ...this.state.message.slice(0,index),
        ...this.state.message.slice(index + 1)
        ] });

    }

    	dataCreated(data) {
             this.setState({ message: [...this.state.message, data.desc] });
	   }

    customValidateText(text) {
      return (text.length > 0 && text.length < 64);
    }
	
  render() {
       
    return (
		<div>
            <span>JOB DESCRIPTION: </span>
			
			<List >
			{this.state.message.map((c, index) => (
			  <ListItem style={{display:'block',padding:'0px', minHeight: '2px'}}> <ListItemContent icon="radio_button_checked">
			  <IconButton name = 'delete' style = {{float:'left', color:'rgba(0, 0, 0, 0.298039)' }} onClick={this.datadDeleted.bind(null,index)}/>
				<InlineEdit
				  validate={this.customValidateText}
				  activeClassName="editing"
				  text={c}
				  paramName="desc"
				  change={this.dataChanged.bind(null,index)}
				  style={{
					minWidth: 500,
					display: 'inline-block',
					margin: 0,
					padding: '10px',
					fontSize: 14,
					outline: 0,
					border: 0
				  }}
				/>
				</ListItemContent>
			  </ListItem>
			))}

			<ListItem style={{display:'block',padding:'0px', minHeight: '2px'}}> <ListItemContent icon="radio_button_checked" >
			  <InlineEdit
				  validate={this.customValidateText}
				  activeClassName="editing"
				  text='add'
				  paramName="desc"
				  change={this.dataCreated}
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
			</List>
        </div>
    )
  }
}
 