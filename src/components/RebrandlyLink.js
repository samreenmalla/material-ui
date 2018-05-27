import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//material-ui
import Table from 'material-ui/Table';
import { TableBody, TableRow, TableColumn, IconButton } from 'material-ui';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import EditIcon from 'material-ui/svg-icons/image/edit';
import { TableHeader, TableHeaderColumn, TableRowColumn } from 'material-ui';

//Components
import Header from './Header';
import RebrandlyApi from '../services/RebrandlyApi';

//Actions
import { selectLink } from '../actions/linkActions';

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
              this.props.lists.map((link) => {
                return (
                  <TableRow key={link.id}>
                    <TableRowColumn> {link.title}</TableRowColumn>
                    <TableRowColumn> {link.destination} </TableRowColumn>
                    <TableRowColumn> {link.shortUrl}</TableRowColumn>
                    <TableRowColumn>

                      
                    <IconButton
                      onClick={() => {
                        this.props.handleEditButtonClick(link)
                        //this.props.history.push(`/links/${link.id}/edit`)
                        }} >
                        <EditIcon />
                    </IconButton>

                        
                    <IconButton>
                        onClick={() => this.deleteLink(link.id)} >
                          <DeleteIcon />
                      </IconButton>
                  </TableRowColumn>
             
              </TableRow>
            )
          })
        }
          </TableBody>
        </Table>
      </div>
    )
  }

  componentWillMount() {
    this.listLink()
  }

  deleteLink(linkId) {
    RebrandlyApi.delete(`/links/${linkId}`)
    .then(response => {
      this.listLink()
    })
    .catch(err => {
      alert(err.message)
    })
  }

  listLink() {
    RebrandlyApi.get('/links')
    .then(links => {
      this.setState({
        links: links
      })
    })
}
}

  function mapStateToProps(state){

    return{
      lists: state.linkReducers,
      selectedLink: state.selectReducer

    }
  }

  function mapDispatchToProps(dispatch){
    return(
      bindActionCreators({
      handleEditButtonClick: selectLink
     }, dispatch)
    )
  }

  


export default connect(mapStateToProps,mapDispatchToProps)(RebrandlyLink);
