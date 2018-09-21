import React, { Component } from 'react';
import './css/App.css';
import Foo from './components/Foo.js';//****Change to container if using */
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>CONTENT</div>
    )
  }
}

export default App;