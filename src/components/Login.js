import React, { Component } from 'react';

//Components of Material-UI
import TextField from 'material-ui/TextField';
import { blue500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
//import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

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
  constructor(props){
    super(props)

    this.state = {
      email: '',
      apikey: ''
    }
  }
render(){
	return(
		<div>
		 <TextField
      type = "text"
      floatingLabelText="Email"
      floatingLabelStyle={ floatingLabelStyle }
      floatingLabelFocusStyle={ floatingLabelFocusStyle }
      onChange= {(e) => this.onEmailChange(e)}
    />
    <br />
    <br />
    <TextField
    type = "password"
    floatingLabelText="API key"
    floatingLabelStyle={ floatingLabelStyle }
    floatingLabelFocusStyle={ floatingLabelFocusStyle }
    onChange= {(e) => this.onApikeyChange(e)}
    />
    <br />
    <br />
       <RaisedButton label="SUBMIT" primary={true} style={style} 
       onClick = {(e) => this.onSubmit(e)} />
		</div>

		)
  }

  onEmailChange(e) {
    this.setState({email: e.target.value})
  }
   onApikeyChange(e) {
    this.setState({apikey: e.target.value})
   }  

onSubmit() {
  fetch('https://api.rebrandly.com/v1/account',
  {
    headers: {
      apikey: this.state.apikey
    }
  })
  .then(response => {
    if(response.ok){
    response.json()
    .then(data => 
      { console.log(data)
    if(data.email === this.state.email) {
    console.log("Right User")
    }
  else {
    alert("Not Authorized user")
  }

  })
}

else {
  alert (response.statusText)
  }
})
}
}

export default Login;