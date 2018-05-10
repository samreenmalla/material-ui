import React, { Component} from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

//Material-ui components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//Components
import Header from './components/Header';
//import Body from './components/Body';
import Login from './components/Login';
import AdminBoard from './components/AdminBoard';
import Body from './components/Body';

class App extends Component {
  render() {
    return(
      <MuiThemeProvider>
      <BrowserRouter>
      <Switch>
      <Route path = "/login" component = { Login } />
      <Route path = "/board" component = { AdminBoard }/>
      <Route path = "/Body" component = { Body }/>
      <Route exact path = "/" render = {() => (<Redirect to = "/login" /> )}/>
      </Switch>
      </BrowserRouter>
      </MuiThemeProvider>
      );
    }
  }


export default App;