import React, { Component } from 'react';
import "./index.css";

import { DatePicker, Select, Input, Spin } from 'antd';
import moment from 'moment';

import "antd/dist/antd.css";

const { Option } = Select;

export default class TransactionRow extends Component {
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
          let category_index = this.state.category_elements.indexOf(this.props.category_name);
          let loading = this.state.category_elements.length === 0;
          return(
            <div>
            {loading ? 
                <div><Spin /></div>
                :
                <ul className="table__listing">
                <input type="checkbox" className="table__listing-select"/>
                <li className="table__listing-date">
                <DatePicker
                    format={dateFormat}
                    defaultValue={moment(this.props.transaction_date, dateFormat)}
                />
                </li>
                <li className="table__listing-category">
                <Select
                style={{ width: '85%' }}
                placeholder="Escolha a categoria"
                defaultValue={this.state.category_elements[category_index]}
                >
                {this.state.category_elements.map(item => {
                    return(
                    <Option key={'key'+item} value={item}>{item}</Option>
                    )
                })}
                </Select>
                </li>
                <li className="table__listing-memo">
                <Input
                    placeholder="Memo"
                    defaultValue={this.props.memo}
                />
                </li>
                <li className="table__listing-outflow">
                <Input
                    style={{ width: '40%' }}
                    placeholder="Outflow"
                    defaultValue={this.props.outflow}
                />
                </li>
                <li className="table__listing-inflow">
                <Input
                    style={{ width: '40%' }}
                    placeholder="Inflow"
                    defaultValue={this.props.inflow}
                />
                </li>
                </ul>
            }
          </div>
          )
      }
}