import React, {Component} from 'react';
let Menu = require('material-ui/lib/menus/menu');
let MenuItem = require('material-ui/lib/menus/menu-item');
//let MenuDivider = require('material-ui/lib/menus/menu-divider');

let styles = {
  left: 0,
  width: '100px'
};

class MainMenu extends Component {
  render() {
    return <aside>
      <Menu desktop={true} style={styles}>
        <MenuItem primaryText="Tickets" />
        <MenuItem primaryText="Site Admin" />
        <MenuItem primaryText="Reports" />
      </Menu>
    </aside>
  }
}

export default MainMenu