import React, { Component } from 'react';
//import logo from '../assets/logo-blue.svg';
//Components of Material-UI
import TextField from 'material-ui/TextField';
import { blue500, blue700 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import { Card,CardHeader } from 'material-ui/Card';

//Services
import RebrandlyApi from '../services/RebrandlyApi';



const style={
   margin: 12
}

const floatingLabelStyle={
    color: blue500
}

const floatingLabelFocusStyle={
    color: blue500
}

const titleColor = {
    titleColor: blue500
}

class Login extends Component{
  alignCenter = {
    height: "500px",          
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  cardWidth = {
    widht: "1200px"
  }
  constructor(props){
    super(props)

    this.state = {
      email: '',
      apikey: ''
    }
  }
render(){
	return(
		<div style = { this.alignCenter } >
    <Card style = { this.cardWidth } >
    <CardHeader
    title = "Rebrandly"
    titleStyle={{ 'fontSize':'30px', 'fontWeight':'medium' }}
      titleColor={ blue700 }
    />
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
    </Card>
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

  this.getAccountDetail(this.state.apikey)
  .then(account => {
    if (account.email === this.state.email) {
      sessionStorage.setItem('apikey', this.state.apikey)
      sessionStorage.setItem('email',this.state.email)
      this.props.history.push('/board')
    }
    else{
      alert('Credentials did not match')
    }
  })
  .catch(error => {
    alert(error.message)
  })
}
  // fetch('https://api.rebrandly.com/v1/account',
  // {
  //   headers: {
  //     apikey: this.state.apikey
  //   }
  // })
  // .then(response => {
  //   if(response.ok){
  //   response.json()
  //   .then(data => 
  //     { console.log(data)
  //   if(data.email === this.state.email) {
  //   console.log("Right User")
  //   }
  // else {
  //   alert("Not Authorized user")
  // }
getAccountDetail(apikey){
  return RebrandlyApi.get('/account', {headers: {apikey: apikey}})
}
//must be executed before render to check if the components are already rendered or not
componentWillMount() {
  const apikeySession = sessionStorage.getItem('apikey')
  if(apikeySession) {
    this.getAccountDetail(apikeySession)
    .then(account => {
      if(account) {
        this.props.history.push('/board')
      }
    })
    .catch(error => {
      sessionStorage.removeItem('apikey')
    })
  }
}
}
export default Login;