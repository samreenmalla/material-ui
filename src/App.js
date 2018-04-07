import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Drawer } from 'material-ui';


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            "open": false,
          };
    }
       handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return(
          <MuiThemeProvider>
          <AppBar
          title="Material-ui"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick = {this.handleToggle}
          />

        <Drawer
          open = {this.state.open}
          oneRequestChange = {(open)=> this.setState({open})}>
          <AppBar title = "AppBar"
          onLeftIconButtonClick = {this.handleToggle}
            />
          </Drawer>

            <div className = "App">
            <header calssName = "App-header">
            <img src = {logo} calssName = "App=logo" alt = "logo" />
            <h1 className = "App-title"> Welcome to React</h1>
            </header>
            <p className = "App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            //New Component
            <User firtName = {firstName} lastName = {lastName}/>

            </div>
          </MuiThemeProvider>
            
        );
      }
    }
  const firstName = "Samreen";
  const lastName = "Malla";

export default App;