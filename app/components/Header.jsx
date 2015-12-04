import React from 'react';
const AppBar = require('material-ui/lib/app-bar');


export default class Header extends React.Component {
  render() {
    return <header>
      <AppBar
        title="Support Ticket Admin"
        iconClassNameRight="muidocs-icon-navigation-expand-more" /><br />
    </header>
  }
}