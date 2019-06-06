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
          <div className="account__reconcile">Reconciliar Conta</div>
        </div>
        <div className="account__buttons">
          <div className="account__add-transaction">
            <span>+ Adicionar Transação</span>
          </div>
        </div>
        <div className="account__listing">
          <ul className="table__header">
            <input className="table__header-select" type="checkbox" />
            <li className="table__header-date">Data</li>
            <li className="table__header-category">Categoria</li>
            <li className="table__header-memo">Memo</li>
            <li className="table__header-outflow">Outflow</li>
            <li className="table__header-inflow">Inflow</li>
          </ul>

          <ul className="table__listing">
            <input type="checkbox" className="table__listing-select"/>
            <li className="table__listing-date">20/04/2019</li>
            <li className="table__listing-category">Comida</li>
            <li className="table__listing-memo">Compras do mês</li>
            <li className="table__listing-outflow">R$ 220</li>
            <li className="table__listing-inflow"></li>
          </ul>
        </div>
      </div>
    );
  }
}