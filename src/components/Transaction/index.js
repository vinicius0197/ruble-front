import React, { Component } from 'react';

export default class Transaction extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.account);
    return(
      <h1>Transactions</h1>
    );
  }
}