import React, { Component} from 'react';
import Chip from 'material-ui/Chip';
import AppBar from 'material-ui/AppBar';

class User extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: props.firstName + ' ' + props.lastName,
            userName: "UserName"
        }
    }
    render() {
        return(
            <div>
            <h1 onClick = {() => handleClick(this.state.name)}>
            This is {this.props.firstName + ''+ this.props.lastName }. </h1>
            <Chip> {this.state.userName}  </Chip>
            <input name = "username" 
            type = 'text' 
            value = {this.state.userName}
            onChange={(event)=> this.handleChange(event)} />
            </div>
            
        )
    }
    handleChange = function(event) {
        this.setState({
            userName: event.target.value
        })
    }
}


function handleClick(name){
    alert(name + ' Clicked')
}



export default User;