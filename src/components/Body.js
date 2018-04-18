import React, { Component } from 'react';

//Components of Material-ui
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Body extends Component{
	render(){
		return(
	<div>
	 <Table>
    <TableHeader 
    displaySelectAll= { false }>
      <TableRow>
        <TableHeaderColumn>Roll no.</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Attendance</TableHeaderColumn>
      </TableRow>
    </TableHeader>

     <TableBody 
     displayRowCheckbox= { false }>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>Aarash Shrestha</TableRowColumn>
        <TableRowColumn>Present</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>15</TableRowColumn>
        <TableRowColumn>Mukesh Karn</TableRowColumn>
        <TableRowColumn>Absent</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>17</TableRowColumn>
        <TableRowColumn>Pratikshya Maharjan</TableRowColumn>
        <TableRowColumn>Present</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>23</TableRowColumn>
        <TableRowColumn>Salina Maharjan</TableRowColumn>
        <TableRowColumn>Absent</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>36</TableRowColumn>
        <TableRowColumn>Yankee Maharjan</TableRowColumn>
        <TableRowColumn>Present</TableRowColumn>
      </TableRow>
    </TableBody>
    </Table>
    </div>


    )
	}
}

export default Body;