import React from 'react';
import Note from './Note.jsx';
//import MainMenu from './MainMenu';
import Header from './Header';
import TicketList from './TicketList';

const MyRawTheme = require('../theme.js');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const ThemeDecorator = require('material-ui/lib/styles/theme-decorator');

@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
export default class App extends React.Component {
  render() {
    return (
      <div>
      <Header />

      <Note />
      <TicketList />
    </div>
    );
  }
}