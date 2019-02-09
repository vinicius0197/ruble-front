import React, { Component } from 'react';
import './App.css';
import { ReactComponent as BookIcon } from './img/book.svg';
import { ReactComponent as DollarIcon } from './img/coin-dollar.svg';
import { ReactComponent as ClipboardIcon } from './img/clipboard.svg';
import { ReactComponent as FileIcon } from './img/file-text.svg';
import { ReactComponent as BubbleIcon } from './img/bubble.svg';
import { ReactComponent as HomeIcon } from './img/home3.svg';

import { ReactComponent as LeftArrow } from './img/circle-left.svg';
import { ReactComponent as RightArrow } from './img/circle-right.svg';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
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

        <div className="main">
          <nav className="navbar">
            <div className="navbar__navigation">
              <span className="navbar__icon">&nbsp;</span>
            </div>
          </nav>

          <main className="content">
            <div className="dashboard">
              <div className="options">
                <button className="options__add-category">
                  + Grupo de Categoria
                </button>

                <div className="options__calendar">
                  <LeftArrow className="options__left-arrow" />

                  <div className="options__calendar-date">
                    Feb 2019
                  </div>

                  <RightArrow className="options__right-arrow" />
                </div>
              </div>

              <div className="table">
                <ul className="table__header">
                  <li className="table__header-category">Categoria</li>
                  <li className="table__header-budgeted">Valor orçado</li>
                  <li className="table__header-activity">Atividade</li>
                  <li className="table__header-available">Disponível</li>
                </ul>

                <div className="table__content">
                  <ul className="table__category-group">
                    <li className="table__category-name">Compras do mês</li>
                    <li className="table__category-budgeted">R$210.25</li>
                    <li className="table__category-activity">R$35.20</li>
                    <li className="table__category-available">R$508.98</li>
                  </ul>

                  <ul class="table__category-element">
                    <li className="table__element-name">Carro</li>
                    <li className="table__element-budgeted">R$145.75</li>
                    <li className="table__element-activity">R$25.69</li>
                    <li className="table__element-available">R$86.00</li>
                  </ul>

                  <ul className="table__category-element">
                    <li className="table__element-name">Escola</li>
                    <li className="table__element-budgeted">R$145.75</li>
                    <li className="table__element-activity">R$25.69</li>
                    <li className="table__element-available">R$87.00</li>
                  </ul>

                  <ul className="table__category-element">
                    <li className="table__element-name">Gasolina</li>
                    <li className="table__element-budgeted">R$45.75</li>
                    <li className="table__element-activity">R$25.69</li>
                    <li className="table__element-available">R$7.00</li>
                  </ul>

                  <ul className="table__category-element">
                    <li className="table__element-name">Material de escritório</li>
                    <li className="table__element-budgeted">R$145.75</li>
                    <li className="table__element-activity">R$5.69</li>
                    <li className="table__element-available">R$87.00</li>
                  </ul>

                  <ul className="table__category-group">
                    <li className="table__category-name">Despesas</li>
                    <li className="table__category-budgeted">RS202.2</li>
                    <li className="table__category-activity">R$52.2</li>
                    <li className="table__category-available">R$505.21</li>
                  </ul>

                  <ul className="table__category-element">
                    <li className="table__element-name">Aluguel</li>
                    <li className="table__element-budgeted">R$45.75</li>
                    <li className="table__element-activity">R$25.69</li>
                    <li className="table__element-available">R$87.00</li>
                  </ul>

                  <ul className="table__category-element">
                    <li className="table__element-name">Gás</li>
                    <li className="table__element-budgeted">R$645.75</li>
                    <li className="table__element-activity">R$25.69</li>
                    <li className="table__element-available">R$87.00</li>
                  </ul>

                  <ul className="table__category-element">
                    <li className="table__element-name">Uber</li>
                    <li className="table__element-budgeted">R$545.75</li>
                    <li className="table__element-activity">R$85.69</li>
                    <li className="table__element-available">R$1237.00</li>
                  </ul>

                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
