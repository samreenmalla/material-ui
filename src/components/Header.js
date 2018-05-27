import React, { Component } from 'react';
import {BrowserRouter, Link } from 'react-router-dom';


//Material-ui components
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


//Components
import AccountIcon from './AccountIcon';
import Body from './Body';



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

			<MenuItem><Link to= '/'> AppBar</Link></MenuItem>
			<MenuItem><Link to = '/'> Drawer</Link></MenuItem>
			<MenuItem><Link to= '/body'> Table</Link></MenuItem>
			<MenuItem><Link to = '/links/new'>New links</Link></MenuItem>
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