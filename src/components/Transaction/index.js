import React, { Component } from 'react';
import "./index.css";

import TransactionRow from "./TransactionRow";

export default class Transaction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category_elements: [],
      transactions: []
    }
  }

  addTransaction = () => {
    const newTransaction = {
      "date": "",
      "category": "",
      "memo": "",
      "outflow": 0,
      "inflow": 0
    };

    this.setState({ transactions: [...this.state.transactions, newTransaction] });
  }

  render() {
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
            <span onClick={this.addTransaction}>+ Adicionar Transação</span>
          </div>
        </div>
        <div className="account__listing">
          <ul className="table__header">
            <input className="table__header-select" type="checkbox" />
            <li className="table__header-date">Data</li>
            <li className="table__header-category--transaction">Categoria</li>
            <li className="table__header-memo">Memo</li>
            <li className="table__header-outflow">Outflow</li>
            <li className="table__header-inflow">Inflow</li>
          </ul>

          {/* <TransactionRow
            data={this.props.data}
            transaction_date='20/04/2012'
            category_name='Minha categoria'
            memo='exemplo'
            outflow='225'
            inflow='0'
          /> */}

          {this.state.transactions.length === 0 ?
            <div>Não há transações</div>
            :
            this.state.transactions.map(transaction => {
              return(
                <TransactionRow
                  data={this.props.data}
                  transaction_date={transaction.date}
                  category_name={transaction.category}
                  memo={transaction.memo}
                  outflow={transaction.outflow}
                  inflow={transaction.inflow}
              />
              )
            })
          }

        </div>
      </div>
    );
  }
}