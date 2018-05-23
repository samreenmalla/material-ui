import React, { Component } from 'react';

//material-ui components
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

//components
import Header from './Header';

//services
import RebrandlyApi from '../services/RebrandlyApi';

class CreateRebrandlyLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      destination: ''
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Card style={{ margin: "10px 10px 0 10px" }}>
          <CardHeader
            title={<strong> Create new link </strong>} />
          <CardText>
            <TextField style={{ width: "100%" }}
              floatingLabelText="Title"
              value={this.state.title}
              onChange={(e) => {
                this.setState({
                  title: e.target.value
                })
              }
              }
            />

            <br />
            <TextField style={{ width: "100%" }}
              floatingLabelText="Destination URL"
              value={this.state.destiantion}
              onChange={(e) => {
                this.setState({
                  destination: e.target.value
                })
              }
              } />
          </CardText>
          <CardActions>
            <FlatButton label= "Submit" onClick = {() => this.onSubmit()}/>
          </CardActions>
        </Card>
      </div>
    )
  }

  onSubmit(){
    const data = {
      title: this.state.title,
      destination: this.state.destination
    }

    RebrandlyApi.post('/links', {body: data})
    .then (()=> {
      this.props.history.push("/links")
    })
    .catch(err => {
      (err.message)
    })
  }
}

export default CreateRebrandlyLink;