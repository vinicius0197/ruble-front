import React, { Component } from 'react';

import { ReactComponent as BookIcon } from '../../img/book.svg';
import { ReactComponent as DollarIcon } from '../../img/coin-dollar.svg';
import { ReactComponent as ClipboardIcon } from '../../img/clipboard.svg';
import { ReactComponent as FileIcon } from '../../img/file-text.svg';
import { ReactComponent as BubbleIcon } from '../../img/bubble.svg';
import { ReactComponent as HomeIcon } from '../../img/home3.svg';

export default class Sidebar extends Component {
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

        <li className="sidebar__item">
          <DollarIcon className="sidebar__icon"/>
          <span>Orçamento</span>
        </li>
        <li className="sidebar__item">
          <ClipboardIcon className="sidebar__icon"/>
          <span>Relatórios</span>
        </li>
        <li className="sidebar__item">
          <FileIcon className="sidebar__icon"/>
          <span>Contas</span>
        </li>
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