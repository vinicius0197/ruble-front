import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

import { ReactComponent as BookIcon } from '../../img/book.svg';
import { ReactComponent as DollarIcon } from '../../img/coin-dollar.svg';
import { ReactComponent as ClipboardIcon } from '../../img/clipboard.svg';
import { ReactComponent as FileIcon } from '../../img/file-text.svg';
import { ReactComponent as BubbleIcon } from '../../img/bubble.svg';
import { ReactComponent as HomeIcon } from '../../img/home3.svg';

const axios = require('axios');

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      account_data: []
    };
  }

  toggleClass = () => {
    this.setState({active: !this.state.active});
  }

  fetchData = () => {
    axios.get('http://127.0.0.1:8000/account.json')
      .then((response) => {
        this.setState({
          account_data: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <nav className="sidebar">
      <div className="sidebar__title">
        <a href="#" className="sidebar__home">
          <span className="sidebar__start">Meu</span><span className="sidebar__end">Orçamento</span>
        </a>
      </div>

      <ul className="sidebar__menu">
        <li className="sidebar__item">
          <BookIcon className="sidebar__icon"/>
          <span>Sumário</span>
        </li>

        <Link to={`/budget`}>
          <li className="sidebar__item">
            <DollarIcon className="sidebar__icon"/>
            <span>Orçamento</span>
          </li>
        </Link>

        <li className="sidebar__item">
          <ClipboardIcon className="sidebar__icon"/>
          <span>Relatórios</span>
        </li>

        <li className="sidebar__item--account">
          <div
          className={this.state.active ? "sidebar__icon-group--enabled" : "sidebar__icon-group"}
          onClick={this.toggleClass}
          >
            <FileIcon className="sidebar__icon"/>
            <span>Contas</span>   
          </div>

          <div
            className={this.state.active ? "sidebar__account-container--enabled" : "sidebar__account-container--disabled"}
          >
            <div className="sidebar__account-selector">
              {this.state.account_data.map(item => {
                return(
                  <Link to={{pathname: "/transactions", search: "?account=" + item.account_name}} key={'key'+ item.account_name} style={{textDecoration: 'none', color: '#98a6ad'}}>
                    <div className="sidebar__account" >{item.account_name}</div>
                  </Link>     
                )
              })}
            </div>
          </div>
        </li>

        <li className="sidebar__item">
          <BubbleIcon className="sidebar__icon"/>
          <span>Central de Ajuda</span>
        </li>
        <li className="sidebar__item">
          <HomeIcon className="sidebar__icon"/>
          <span>Minha Conta</span>
        </li>
        <li className="sidebar__bottom"></li>
      </ul>
      </nav>
    )
  }
}