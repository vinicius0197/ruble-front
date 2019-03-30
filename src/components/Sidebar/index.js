import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as BookIcon } from '../../img/book.svg';
import { ReactComponent as DollarIcon } from '../../img/coin-dollar.svg';
import { ReactComponent as ClipboardIcon } from '../../img/clipboard.svg';
import { ReactComponent as FileIcon } from '../../img/file-text.svg';
import { ReactComponent as BubbleIcon } from '../../img/bubble.svg';
import { ReactComponent as HomeIcon } from '../../img/home3.svg';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  toggleClass = () => {
    this.setState({active: !this.state.active});
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

        {/* <Link to={`/accounts`}> */}
          <li className="sidebar__item--account" onClick={this.toggleClass}>
            <div className={this.state.active ? "sidebar__icon-group--enabled" : "sidebar__icon-group"}>
              <FileIcon className="sidebar__icon"/>
              <span>Contas</span>   
            </div>

            <div
              className={this.state.active ? "sidebar__account-container--enabled" : "sidebar__account-container--disabled"}
            >
              <ul className="sidebar__account-selector">
                <li className="sidebar__account">Account 1</li>
                <li className="sidebar__account">Account 2</li>
                <li className="sidebar__account">Account 3</li>
              </ul>
            </div>
          </li>
        {/* </Link> */}

        <li className="sidebar__item">
          <BubbleIcon className="sidebar__icon"/>
          <span>Central de Ajuda</span>
        </li>
        <li className="sidebar__item">
          <HomeIcon className="sidebar__icon"/>
          <span>Minha Conta</span>
        </li>
      </ul>
      </nav>
    )
  }
}