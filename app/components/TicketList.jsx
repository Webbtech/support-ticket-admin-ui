import React from 'react';
//import FaBeer from 'react-icons/fa/beer';

const Colors = require('material-ui/lib/styles/colors');

const FaBeer = require('react-icons/lib/fa/beer');

const FontIcon = require('material-ui/lib/font-icon');

const FlatButton = require('material-ui/lib/flat-button');

const IconButton = require('material-ui/lib/icon-button');

const Table = require('material-ui/lib/table/table');
const TableBody = require('material-ui/lib/table/table-body');
const TableFooter = require('material-ui/lib/table/table-footer');
const TableHeader = require('material-ui/lib/table/table-header');
const TableHeaderColumn = require('material-ui/lib/table/table-header-column');
const TableRow = require('material-ui/lib/table/table-row');
const TableRowColumn = require('material-ui/lib/table/table-row-column');

export default class TicketList extends React.Component {

  render() {
    return (
      <Table
        /*height={this.state.height}
        fixedHeader={this.state.fixedHeader}
        fixedFooter={this.state.fixedFooter}
        multiSelectable={this.state.multiSelectable}*/
        selectable={true}
        onRowSelection={this._onRowSelection}>
        <TableHeader enableSelectAll={false}>
          <TableRow>
            <TableHeaderColumn colSpan="4" tooltip='Super Header' style={{textAlign: 'center'}}>
              <h2>Open Tickets</h2><FontIcon className="muidocs-icon-action-home"  color={Colors.red500} />
              <FontIcon className="material-icons" color={Colors.red500}>home</FontIcon>
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn tooltip='Ticket'>Ticket</TableHeaderColumn>
            <TableHeaderColumn tooltip='Name'>Name</TableHeaderColumn>
            <TableHeaderColumn tooltip='Message'>Status</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow selected={true}>
            <TableRowColumn>nps-10012</TableRowColumn>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>Issue with creating new exterior glass. When type is door_glass ...</TableRowColumn>
            <TableRowColumn><IconButton iconClassName="muidocs-icon-custom-github" tooltip="GitHub"/></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>gdp-1009</TableRowColumn>
            <TableRowColumn>Randal White</TableRowColumn>
            <TableRowColumn>Unemployed (between jobs)</TableRowColumn>
            <TableRowColumn><IconButton tooltip="Sort" disabled={true}>
            </IconButton></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>gsl-1032</TableRowColumn>
            <TableRowColumn>Randal Black</TableRowColumn>
            <TableRowColumn>Unemployed</TableRowColumn>
            <TableRowColumn>
              <IconButton tooltip="Star" iconStyle={{color: 'yellow'}} style={{color: 'yellow'}}><FaBeer /></IconButton></TableRowColumn>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableRowColumn>ID</TableRowColumn>
            <TableRowColumn>Name</TableRowColumn>
            <TableRowColumn>Status</TableRowColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn colSpan="4" style={{textAlign: 'center'}}>
              Super Footer
            </TableRowColumn>
          </TableRow>
        </TableFooter>
      </Table>
    );
  }
}