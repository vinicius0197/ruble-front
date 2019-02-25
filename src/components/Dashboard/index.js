import React, { Component } from 'react';
import { ReactComponent as LeftArrow } from '../../img/circle-left.svg';
import { ReactComponent as RightArrow } from '../../img/circle-right.svg';

export default class Dashboard extends Component {
  render() {
    return (
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
            <li className="table__category-name">
              <form action="#" className="table__category-form">
                <input type="text" className="table__category-input--header" value="Compras do mês"/>
              </form>
            </li>
            <li className="table__category-budgeted">R$210.25</li>
            <li className="table__category-activity">R$35.20</li>
            <li className="table__category-available">R$508.98</li>
          </ul>

          <ul class="table__category-element">
            <li className="table__element-name">
              <form action="#" className="table__category-form">
                <input type="text" className="table__category-input" value="Carro"/>
              </form>
            </li>
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
    )
  }
}