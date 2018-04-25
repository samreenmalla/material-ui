import React, { Component} from 'react';

//Material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//Components
import Header from './components/Header';
import Body from './components/Body';
import Login from './components/Login';


class App extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <Login/>
      </MuiThemeProvider>
      )
    }
  }


export default App;