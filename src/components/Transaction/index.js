import React, { Component } from 'react';
import "./index.css";

import { DatePicker, Select, Input } from 'antd';

import "antd/dist/antd.css";

const { Option } = Select;

export default class Transaction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category_elements: []
    }
  }

  componentDidMount() {
    this.buildElementsList();
  }

  buildElementsList = () => {
    let elementArray = this.state.category_elements;
    this.props.data.map(category => {
      category.elements.map(item => {
        elementArray.push(item.element_name);
      });
    });
    this.setState({ category_elements: elementArray });
  }

  render() {
    const dateFormat = 'DD/MM/YYYY';

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
            <li className="table__header-category--transaction">Categoria</li>
            <li className="table__header-memo">Memo</li>
            <li className="table__header-outflow">Outflow</li>
            <li className="table__header-inflow">Inflow</li>
          </ul>

          <ul className="table__listing">
            <input type="checkbox" className="table__listing-select"/>
            <li className="table__listing-date">
              <DatePicker format={dateFormat} />
            </li>
            <li className="table__listing-category">
            <Select
              style={{ width: '85%' }}
              placeholder="Escolha a categoria"
            >
              {this.state.category_elements.map(item => {
                return(
                  <Option key={'key'+item} value={item}>{item}</Option>
                )
              })}
            </Select>
            </li>
            <li className="table__listing-memo">
              <Input placeholder="Memo" />
            </li>
            <li className="table__listing-outflow">
              <Input style={{ width: '40%' }} placeholder="Outflow" />
            </li>
            <li className="table__listing-inflow">
              <Input style={{ width: '40%' }} placeholder="Inflow" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}