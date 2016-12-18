import React, { PropTypes, Component } from 'react';
import {Layout, Header, IconButton} from 'react-mdl';

class CustomHeader extends Component {
  render() {
    const title = (
	<div>	
		<div style={{display: 'inline-block'}}>
		<IconButton name="menu" />
		<img src={'images/pic.png'} height='48' width='48' />		
		</div>
		
		<div style={{display: 'inline-block', float:'right', paddingTop:'15px'}}>
			<div style={{padding:'0px 0px 0px 10px', fontSize:'14px', lineHeight: '5px'}}>Michael Jacob Hutapea</div>
			<span style={{padding:'0px 0px 0px 10px', fontSize:'12px', color: '#ddd'}}>SE-AP</span>
		</div> 
	
	</div>

     );
    return (  
		<div>
			<Layout fixedHeader style={{position:'inherit'}}>
				<Header title={title} seamed> 					
					<IconButton name="settings" />
					<IconButton name="power_settings_new" />
				</Header>				
			</Layout>
		</div>
    );
  }
}

export default CustomHeader;