import React from 'react';

import MainMenu from './MainMenu';
import Counter from './Counter';

const RaisedButton = require('material-ui/lib/raised-button');
const Paper = require('material-ui/lib/paper');

export default class Note extends React.Component {
  render() {
    return <div className="container">
      <div className="row">
        <div className="col-md-2"><MainMenu /></div>
        <div className="col-md-3">
          <Paper zDepth={1} rounded={false}>
            <div style={{padding: '1.5em'}}>
              <RaisedButton label="Default" /><br /><br />
              <RaisedButton label="Primary" primary={true} /><br /><br />
              <RaisedButton label="Secondary" secondary={true} />
            </div>
          </Paper>
        </div>
        <div className="col-md-2"><Counter /></div>
      </div>
    </div>
  }
}