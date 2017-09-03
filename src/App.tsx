/// <reference path="pivottable.d.ts" />
///<reference path="./../node_modules/@types/jquery/index.d.ts"/>
///<reference path="./../node_modules/@types/jqueryui/index.d.ts"/>
import * as React from 'react';
import './App.css';
import * as $ from 'jquery';

import '../node_modules/jquery-ui/ui/widgets/sortable.js'
import './core.css'
import './sortable.css'
import './pivot.css'

import 'pivottable';

const logo = require('./logo.svg');

class App extends React.Component {
  componentDidMount() {
        $("#pivotoutput").pivotUI([
                {color: "blue", shape: "circle"},
                {color: "red", shape: "triangle"}
            ],
            {
                rows: ["color"],
                cols: ["shape"]
            });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
         <div id="pivotoutput" />
      </div>
    );
  }
}

export default App;
