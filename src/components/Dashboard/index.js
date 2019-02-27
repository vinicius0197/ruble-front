import React, { Component } from 'react';
import { ReactComponent as LeftArrow } from '../../img/circle-left.svg';
import { ReactComponent as RightArrow } from '../../img/circle-right.svg';
import { ReactComponent as PlusIcon } from '../../img/plus.svg';

import { data } from '../../constants/index';

class CategoryGroup extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();

    this.state = {
      category_name: "",
    }
  }

  componentDidMount() {
    this.setState({category_name: this.props.category_name});
    
    if (this.props.createdGroup === true ) {
      this.textInput.current.focus();
    }
  }

  onCategoryNameUpdate = (event) => {
    this.setState({category_name: event.target.value});
  }

  handleEnterPress = (event) => {
    if (event.key == 'Enter') {
      this.textInput.current.blur();
    }
  }

  render() {
    return (
      <ul className="table__category-group">
        <li className="table__category-name">
          <form action="#" className="table__category-form">
            <input
              type="text"
              className="table__category-input--header"
              value={this.state.category_name}
              onChange={this.onCategoryNameUpdate}
              onKeyPress={this.handleEnterPress}
              ref={this.textInput}
            />
          </form>
          <div className="table__add-icon-container"><PlusIcon className="table__add-icon" /></div>
        </li>
        <li className="table__category-budgeted">R${this.props.budgeted_total}</li>
        <li className="table__category-activity">R${this.props.activity}</li>
        <li className="table__category-available">R${this.props.available}</li>
      </ul>
    )
  }
}

class CategoryElement extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();

    this.state = {
      element_name: "",
    }
  }

  componentDidMount() {
    this.setState({element_name: this.props.element_name});
  }

  onElementNameUpdate = (event) => {
    this.setState({element_name: event.target.value});
  }

  handleEnterPress = (event) => {
    if (event.key == 'Enter') {
      this.textInput.current.blur();
    }
  }

  render() {
    return (
      <ul class="table__category-element">
        <li className="table__element-name">
          <form action="#" className="table__category-form">
            <input
              type="text"
              className="table__category-input"
              value={this.state.element_name}
              onChange={this.onElementNameUpdate}
              onKeyPress={this.handleEnterPress}
              ref={this.textInput}
            />
          </form>
        </li>
        <li className="table__element-budgeted">R${this.props.element_budget}</li>
        <li className="table__element-activity">R${this.props.element_activity}</li>
        <li className="table__element-available">R${this.props.element_available}</li>
      </ul>
    )
  }
}

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
      createdCategoryGroup: false,
    };
  }

  addCategoryGroup = () => {
    const newCategoryGroup = {
      "category_name": "",
      "budgeted_total": 0.0,
      "activity": 0.0,
      "available": 0.0,
      "elements": []
    }

    this.setState({
      data: [...this.state.data, newCategoryGroup],
      createdCategoryGroup: true,
    });
  }

  render() {
    return (
      <div className="dashboard">
      <div className="options">
        <button
          className="options__add-category"
          onClick={this.addCategoryGroup}
        >
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
          {this.state.data.map(item => {
            return (
              <div key={'divkey' + item.category_name} className="category-block">
                <div className="category-row">
                  <CategoryGroup
                    category_name={item.category_name}
                    budgeted_total={item.budgeted_total}
                    activity={item.activity}
                    available={item.available}
                    createdGroup={this.state.createdCategoryGroup}
                  />
                </div>

                <div className="element-row">
                  {item.elements.map(el => 
                    <CategoryElement
                      element_name={el.element_name}
                      element_budget={el.element_budget}
                      element_activity={el.element_activity}
                      element_available={el.element_available}
                    />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
    )
  }
}