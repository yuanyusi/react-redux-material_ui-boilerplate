import React, { Component, PropTypes } from 'react';
import AvatarSimple from '../components/AvatarSimple';
import SelectFieldSimple from '../components/SelectFieldSimple';
import SelectFieldDivision from '../components/SelectFieldDivision';
import ImageUpload from '../components/ImageUpload';
import EditInline from '../components/EditInline';
import contactsArray from '../data/contactsArray'

import * as t from 'material-ui/Tabs';
import SelectField from 'material-ui/SelectField';
import DropDownMenu from 'material-ui/DropDownMenu';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

import SearchInput, {createFilter} from 'react-search-input'
import ActionGrade from 'material-ui/svg-icons/action/grade';
import {orange500} from 'material-ui/styles/colors';

import {
	    Icon, 
        Textfield, 
		IconButton, 
		Grid, 
		Cell, 
		Chip,
		Card,
		CardText,
		CardTitle,
		//CardActions,
		CardMenu,
		Button,
		Menu,
		MenuItem
} from 'react-mdl';

const KEYS_TO_FILTERS = ['name'];
const styles = {
  div:{
    display: 'flex',
    flexDirection: 'row wrap',
    padding: 0,
    width: '100%'
  },
  chip: {
    margin: 4
  },
  headline: {
    fontSize: 24,
    marginBottom: 12,
	marginTop: 12,
	display:'inherit',
    fontWeight: 400,
  }
};

class CustomMain extends Component {
	constructor(props){
		super(props);
		let w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
		flag = width>769? true:false;
		
		//alert (flag)
		this.state = {
			value: 1,
			//displayGrid: flag,
			displayCard: true,
			disabledFlag: true,
			persons: contactsArray,
			person: contactsArray[0],
			searchTerm: '',
			searchStatus:false
	    };

		this.updateDimensions = this.updateDimensions.bind(this);
		this.searchUpdated = this.searchUpdated.bind(this);		
	}

	updateDimensions() {
		let w = window,
			d = document,
			documentElement = d.documentElement,
			body = d.getElementsByTagName('body')[0],
			width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
			this.setState({ width: width });    
	}
	
	updatePerson(e) {
		this.setState({ person: e });   						
	}

    searchUpdated (term) {
		var fe = contactsArray.filter(createFilter(term.target.value, KEYS_TO_FILTERS))
		this.setState({
	    searchTerm: term.target.value,
	    searchStatus: true,
		person: fe[0],
		persons: fe
	    })
		//alert (term.target.value)
		
	}

	updateSearchStatus(e){
		this.setState({ searchStatus: e})		
	}
  
    /**
   * Add event listener
   */
    componentDidMount() {
    this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions);	
	}

  /**
   * Remove event listener
   */
    componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);	
	}

    handleChange = (event, index, value) => this.setState({value: value});

openDatePicker(){
  this.refs.dp.openDialog()
}
  render() {
	const filteredEmployees = contactsArray.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

	const showGrid = {
	'display': this.state.displayGrid ? 'flex' : 'none'
	} 

	const showCard = {
	'display': this.state.displayCard ? 'flex' : 'none',
	margin:'auto',
	float: 'left'
	} 

	const showForm = () => {
		let w = window,
			d = document,
			documentElement = d.documentElement,
			body = d.getElementsByTagName('body')[0],
			width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
		if (this.state.width < 769){ 
		this.setState({displayGrid: !this.state.displayGrid, displayCard: this.state.displayGrid});	
		}  
	}
	
	const disabledForm = () => {		
		this.setState({disabledFlag: !this.state.disabledFlag});			 
	}
    
	return (
    <div> 
	<Card id="maxsize" shadow={0} style={showCard}>
		<CardTitle style={{color: '#fff', height: '48px', backgroundColor: 'rgb(92, 106, 192)'}}>
			<Textfield
				onChange={this.searchUpdated}
				label="Expandable Input"
				expandable
				expandableIcon="search"
				style={{width:'200px', paddingTop: '10px'}}
			/>
		</CardTitle>
		<CardText style={{height: '610px', overflowY: 'scroll'}}>
			<AvatarSimple persons={this.state.persons} update={this.updatePerson.bind(this)}
			handleSearch={this.updateSearchStatus.bind(this)} searchStatus={this.state.searchStatus}/>
		</CardText>

		<CardMenu style={{color: '#fff',position: 'absolute', right: '0px', top: '0px'}}>
			<IconButton className="muidocs-icon-custom-sort" name=""  style={{top: '4px'}}/>
			<IconButton name="filter_list" style={{top: '5px'}} onClick={showForm}/>
			<Chip style={styles.chip}>{this.state.persons.length}</Chip>	
			<IconButton name="more_vert" id="demo-menu-lower-right" style={{top: '5px'}}/>
			<Menu target="demo-menu-lower-right" align="right">
				<MenuItem>Some Action</MenuItem>
				<MenuItem disabled>Disabled Action</MenuItem>
			</Menu>
		</CardMenu>
	</Card>
	
	<Grid className="fadeshow" >
		<Cell col={8} style={{width: '100%'}}>
		<t.Tabs>
				<t.Tab icon={<Icon name="person" />} style={{backgroundColor: 'rgb(92, 106, 192)', height:'inherit'}} >
				  <div style={{padding: '0px 0px 0px 10px'}}>
					<span style={styles.headline}><IconButton name="filter_list" onClick={showForm}/>Employee Management</span>
						<Grid style={{margin: '0px'}}>
							<Cell col={6} style={{minWidth: '270px'}}>							
								
								<TextField
								  hintText="First Name"
								  floatingLabelText="First Name"
								  floatingLabelFixed={true}
								  value={this.state.person.firstname}
								  disabled={this.state.disabledFlag}
								/>
								
								<TextField
								  hintText="Last Name"
								  floatingLabelText="Last Name"
								  floatingLabelFixed={true}
								  value={this.state.person.lastname}
								  disabled={this.state.disabledFlag}
								/>
								
								<TextField
								  hintText="Gender"
								  floatingLabelText="Gender"
								  floatingLabelFixed={true}
								  value={this.state.person.gender}
								  disabled={this.state.disabledFlag}
								/>
								<div style = {{paddingBottom: '72px'}}>
								<IconButton name = 'date_range' style = {{float: 'left', top: '30px', left:'220px', color:'rgba(0, 0, 0, 0.298039)' }}/>
								<DatePicker 
									floatingLabelText="Date Of Birth"
									floatingLabelFixed={true}
								    hintText="Date of Birth" 
									container="inline" 
									autoOk={true}
									textFieldStyle = {{display: 'inherit', position: 'absolute'}}
								/>		
								</div>
								<TextField
								  hintText="Nationality"
								  floatingLabelText="Nationality"
								  floatingLabelFixed={true}
								  value={this.state.person.nationality}
								  disabled={this.state.disabledFlag}
								/>
								
								<TextField
								  hintText="Marital Status"
								  floatingLabelText="Marital Status"
								  floatingLabelFixed={true}
								  value={this.state.person.maritalstatus}
								  disabled={this.state.disabledFlag}
								/>
								
								<TextField
								  hintText="Phone"
								  floatingLabelText="Phone"
								  floatingLabelFixed={true}
								  value={this.state.person.phone}
								  disabled={this.state.disabledFlag}
								/>
								
								{/*<Textfield
									onChange={() => {}}
									pattern="-?[0-9]*(\.[0-9]+)?"
									error="Input is not a number!"
									label="Number..."
									floatingLabel
									disabled={this.state.disabledFlag}
								/>
								
								<Textfield
									onChange={() => {}}
									label="Text lines..."
									rows={3}
									style={{width: '300px'}}
									floatingLabel
									disabled={this.state.disabledFlag}
									value={this.state.person.image}
								/>*/}

							</Cell>
						<Cell col={5} style={{minWidth: '270px'}}>
											<TextField
											  hintText="Sub Division"
											  floatingLabelText="Sub Division"
											  floatingLabelFixed={true}
											  value={this.state.person.subdivision}
											  disabled={this.state.disabledFlag}
											/>

											<TextField
											  hintText="Status"
											  floatingLabelText="Status"
											  floatingLabelFixed={true}
											  value={this.state.person.status}
											  disabled={this.state.disabledFlag}
											/>
											<TextField
											  hintText="Suspend Date"
											  floatingLabelText="Suspend Date"
											  floatingLabelFixed={true}
											  value={this.state.person.suspenddate}
											  disabled={this.state.disabledFlag}
											/>
											<div style = {{paddingBottom: '72px'}}>
												<IconButton name = 'date_range' style = {{float: 'left', top: '30px', left:'220px', color:'rgba(0, 0, 0, 0.298039)' }}/>
												<DatePicker 
													floatingLabelText="Hired Date"
													floatingLabelFixed={true}
													hintText="Hired Date" 
													container="inline" 
													autoOk={true}
													textFieldStyle = {{display: 'inherit', position: 'absolute'}}
												/>		
											</div>
											<SelectFieldSimple />
											<SelectFieldDivision />
											<TextField
											  hintText="Email"
											  floatingLabelText="Email"
											  floatingLabelFixed={true}
											  value={this.state.person.email}
											  disabled={this.state.disabledFlag}
											/>
											
								
								
							</Cell>	
							<Cell col={1} style={{minWidth: '100px'}}>							
							<ImageUpload image={this.state.person.image} style={{float:'right'}}/>
							</Cell>
						</Grid>	
				  </div>
				  <CardTitle style={{color: '#fff', height: '48px', backgroundColor: 'rgb(92, 106, 192)', justifyContent:'flex-end'}}>
					<Button raised accent ripple onClick={disabledForm}>Edit</Button>
				  </CardTitle>
				</t.Tab>
				<t.Tab style={{backgroundColor: 'rgb(92, 106, 192)'}}
				  icon={<Icon name="history" />} >
				  <div>
					<h2 style={styles.headline}>Employement History</h2>
					<EditInline />

				  </div>
				</t.Tab>
				<t.Tab style={{backgroundColor: 'rgb(92, 106, 192)'}}
				  icon={<Icon name="layers" />} >
				  <div>
					<h2 style={styles.headline}>Grade History</h2>
					<p>
					  This is another example tab.
					</p>
				  </div>
				</t.Tab>
				<t.Tab style={{backgroundColor: 'rgb(92, 106, 192)'}}
				  icon={<Icon name="wc" />} >
				  <div>
					<h2 style={styles.headline}>Family Members</h2>
					<p>
					  This is another example tab.
					</p>
				  </div>
				</t.Tab>
				<t.Tab style={{backgroundColor: 'rgb(92, 106, 192)'}}
				  icon={<Icon name="home" />} >
				  <div>
					<h2 style={styles.headline}>Addresses</h2>
					<p>
					  This is another example tab.
					</p>
				  </div>
				</t.Tab>
				<t.Tab style={{backgroundColor: 'rgb(92, 106, 192)'}}
				  icon={<Icon name="person_pin_circle" />} >
				  <div>
					<h2 style={styles.headline}>Office Location</h2>
					<p>
					  This is another example tab.
					</p>
				  </div>
				</t.Tab>
			  </t.Tabs>
		
		</Cell>
	</Grid>
	</div>
    );
  }
}




CustomMain.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default CustomMain;
