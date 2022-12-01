import React, { Component } from 'react';
import Axios from 'axios';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export default class LoanCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {loanAmount: 500,
      duration: 6,
      monthlyPayment: 0,
      interestRate: 0,
      numberOfPayments: 0,
      principal: 0,
    };
    
  }

 

  handleChangeDuration = (value) => {
    value = Number.parseInt(value);
    Axios.get(`https://api.testing.onboarding.bimaxpress.com/calculator/emiCalculator`).then((res) => {
      //console.log(res);
      this.setState({
        ...this.state,
        amount: this.state.loanAmount,
        tenure: this.state.duration,
        interestRate: this.state.rate,
        processingFeeInterestRatio: this.state.interestRatio
      })
    });
    //console.log(this.state);
  }
 
  render() {
    
    return (
      <div>
      <div className="bg-danger pt-2 pb-1">
        <h4 className="text-center text-light">Loan Calculator</h4>
      </div><br />
      <div className="container text-center">
        <form className="mt-1 pl-3 pr-3 pb-3">
          <div className="form-group">
            <label >Loan Amount</label><br /><br />
            <InputRange
              maxValue={5000}
              minValue={500}
              value={this.state.loanAmount}
              formatLabel={value => value}
              onChangeComplete = {this.handleChangeLoanAmount}
              onChange = {
                (value) => {
                  //console.log("Amount Change")
                  this.setState({
                    ...this.state,
                    loanAmount: value
                  })
                }
              }
              step={100}
            />
          </div>
          <div className="form-group">
            <label >Loan Duration</label><br /><br />
            
            <InputRange
              maxValue={24}
              minValue={6}
              value={this.state.duration}
              formatLabel={value => value+'months'}
              onChange = {
                (value) => {
                  //console.log("Amount Change")
                  this.setState({
                    ...this.state,
                    duration: value
                  })
                }
              }
              onChangeComplete = { this.handleChangeDuration }
            />
          </div>
          <div className="form-group">
            <label>Monthly payment</label>
            <h3><b>{this.state.monthlyPayment}</b></h3>
          </div>
          <hr />
          <div className="form-group">
            <label >Interest Rate</label>
            <h3><b>{this.state.interestRate}%</b></h3>
          </div>
          <hr />
          <div className="form-group">
            <label >Number of payments</label>
            <h3><b>{this.state.numberOfPayments}</b></h3>
          </div>
          <hr />
          <div className="form-group">
            <label >Principal</label>
            <h3><b>{this.state.principal}</b></h3>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

