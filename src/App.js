import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AutoCompleteText from './AutoCompleteText';
import countries from './countries';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Component">
          <AutoCompleteText items={countries} />
        </div>
      </div>
    );
  }
}

export default App;
