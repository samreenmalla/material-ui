import React, { Component } from 'react';

//Components of Material-UI
import TextField from 'material-ui/TextField';
import { blue500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

const style={
	 margin: 12
}

const floatingLabelStyle={
    color: blue500
}

const floatingLabelFocusStyle={
    color: blue500
}

class Login extends Component{
render(){
	return(
		<div>
		 <TextField
      floatingLabelText="Email"
      floatingLabelStyle={ floatingLabelStyle }
      floatingLabelFocusStyle={ floatingLabelFocusStyle }
    />
    <br />
    <br />
    <TextField
    floatingLabelText="API key"
    floatingLabelStyle={ floatingLabelStyle }
    floatingLabelFocusStyle={ floatingLabelFocusStyle }
    />
    <br />
    <br />
       <RaisedButton label="SUBMIT" primary={true} style={style} />
		</div>

		)

	
}
}

export default Login;