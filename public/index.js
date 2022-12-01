import React, { Component } from 'react';
import { render } from 'react-dom';
import LoanCalculator from './components/LoanCalculator';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
       <LoanCalculator />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
