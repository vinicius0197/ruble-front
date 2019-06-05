import React, { Component } from 'react';
import "./index.css";

export default class Transaction extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.account);
    return(
      <div className="account">
        <div className="account__header">
          <div className="account__details">
            <div className="account__name">
              <span className="account__text">Conta</span>
            </div>
            <div className="account__balance">
              <span>Balanço</span>
              <div className="account__balance-value">R$ 25.000,00</div>
            </div>
          </div>
          <button className="account__reconcile">Reconciliar Conta</button>
        </div>
        <div className="account__buttons">Buttons</div>
        <div className="account__listing">Listing</div>
      </div>
    );
  }
}