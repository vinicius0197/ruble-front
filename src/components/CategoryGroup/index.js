import React, { Component } from 'react';
import { ReactComponent as PlusIcon } from '../../img/plus.svg';

export default class CategoryGroup extends Component {
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

  createCategory = (id) => {
    this.props.addElement(id);
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
              placeholder="Grupo de Categoria"
            />
          </form>
          <div className="table__add-icon-container">
            <PlusIcon
              className="table__add-icon"
              onClick={() => this.props.onCreateElementClick(this.props.id)}
              />
          </div>
        </li>
        <li className="table__category-budgeted">R${this.props.budgeted_total}</li>
        <li className="table__category-activity">R${this.props.activity}</li>
        <li className="table__category-available">R${this.props.available}</li>
      </ul>
    )
  }
}