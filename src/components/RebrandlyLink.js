import React, { Component } from 'react';
import Table from 'material-ui/Table';
import { TableBody, TableRow, TableColumn } from 'material-ui';
import Header from './Header';
import { TableHeader, TableHeaderColumn, TableRowColumn } from 'material-ui';

class RebrandlyLink extends Component {
  constructor(props) {
    super(props)
    this.state = {
      links: []
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Table>
          <TableHeader displaySelectAll = {false}>
            <TableRow>
              <TableHeaderColumn> Title </TableHeaderColumn>
              <TableHeaderColumn> Destination </TableHeaderColumn>
              <TableHeaderColumn> ShortUrl </TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody displayRowCheckbox = { false }>
            {
              this.state.links.map((link) => {
                return (
                  <TableRow key={link.id}>
                    <TableRowColumn> {link.title}</TableRowColumn>
                    <TableRowColumn> {link.destination} </TableRowColumn>
                    <TableRowColumn> {link.shortUrl}</TableRowColumn>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </div>
    );
  }

  componentWillMount() {
    fetch('https://api.rebrandly.com/v1/links',
      {
        headers: {
          apikey: sessionStorage.getItem('apikey')
        }
      })
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            this.setState({
              links: data
            })
          })
        }
        else {
          alert(response.statusText)
        }

      })

  }
}

export default RebrandlyLink;
