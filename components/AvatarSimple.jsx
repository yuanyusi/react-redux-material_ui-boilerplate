import React, { Component, PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import Divider from 'material-ui/Divider';

import CreateEmployeeDialog from '../components/CreateEmployeeDialog';

import {
	    Icon, 
        Textfield, 
		IconButton, 
		Grid, 
		Cell, 
		Layout, 
		Header, 
		FABButton,
		List,
		ListItem,
		ListItemContent,
		ListItemAction,
		Chip,
		Card,
		CardText,
		CardTitle,
		CardActions,
		CardMenu,
		Button,
		Menu,
		MenuItem,
		Dialog,
		DialogActions,
		DialogContent,
		DialogTitle
} from 'react-mdl';

const style = {
  left:{
    display: 'inline-block',
	overflow: 'hidden'
  },
    right:{
    padding: '0px 20px 0px 0px',
	textAlign: 'right',
	float: 'right'
  },
    icon:{
    margin: '0px 10px 0px 0px'
	
  }
};

export default class AvatarSimple extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
		person: this.props.persons[0],
		handleSearch : false
	  };	  
	}
	
	handleClick(contact) {
	  this.setState({person: contact, handleSearch: false});
      this.props.update(contact);
      this.props.handleSearch(false);
    }

    componentWillReceiveProps(e){
     if (e.searchStatus)
     this.setState({person: e.persons[0]});
    }
  render() {
	                 
	    return (
<div>

  <List >
  
	{this.props.persons.map((c) => (

	<div onClick={this.handleClick.bind(this, c)} style={{backgroundColor: c === this.state.person ? '#CCD0EB' : ''}}>
	  <ListItem threeLine>
		<ListItemContent avatar={
			<Avatar
			  src={c.image}
			  size={48}
			  style={style.icon}
			/>
		  }
		  subtitle={
			<span>  
		  SE - PG,  CDC AsteRx <br />  
		  Bali, +6281234567890
			 </span> 
		  }>{c.name}</ListItemContent>
		<ListItemAction info="22 Aug 2015">      
		  <Icon name={c.isActive?"radio_button_checked":"radio_button_unchecked"} style={{color:"#673ab7"}} />
		  <a href="#"><Icon name="keyboard_arrow_right" /></a>
		</ListItemAction>
	  </ListItem>
	  <Divider />
	</div>
	))}
</List>
<div className="bd-smoothscroll-3">

<CreateEmployeeDialog />
</div>
</div>
)
}
}