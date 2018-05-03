import React, { Component } from 'react';


//Material-ui components
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


//Components
import AccountIcon from './AccountIcon';

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			sideBarOpen: false
		}
	}
	render(){
		return(

			<div>
			<AppBar title= "Material-UI" 
			iconElementRight= { <AccountIcon email= { this.state.email } /> }
			onLeftIconButtonClick= {() => this.toggleSideBar()}
			/>
			<Drawer 
			open= { this.state.sideBarOpen } 
			docked={false}
			onRequestChange = {
				()=> this.toggleSideBar()}>
			<MenuItem> AppBar </MenuItem>
			<MenuItem> Drawer </MenuItem>
			<MenuItem> Table </MenuItem>
			</Drawer>
			</div>
		)
	}

	toggleSideBar(){
		this.setState ({sideBarOpen: !this.state.sideBarOpen})
	}

	componentWillMount() {
		this.setState( {
			email: sessionStorage.getItem('email')
		})
	}

}
export default Header;