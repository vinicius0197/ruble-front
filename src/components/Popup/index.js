import React, { Component } from 'react';

export default class AccountPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account_type: 'checking',
      account_name: '',
      account_balance: null
    }
  }

  handleAccountType = (event) => {
    this.setState({ account_type: event.target.value });
  }

  handleNameChange = (event) => {
    this.setState({ account_name: event.target.value });
  }

  handleBalanceChange = (event) => {
    this.setState({ account_balance: event.target.value });
  }


  render() {
    return(
      <div className="popup" id="popup">
        <div className={this.props.showPopup ? "popup__content" : null}>
          <div className="popup__header">
            <div className="popup__title">Adicionar Nova Conta</div>
            <div
              class="popup__close"
              onClick={() => this.props.closePopup()}
            >&times;</div>
          </div>
          <hr />
          <div className="popup__text">
            <span>Pronto para adicionar uma nova conta? Basta configurar as opções abaixo:</span>
          </div>

          <div className="popup__options">
            <form>
              <div className="popup__options--account-input">
                <span><b>Que tipo de conta você quer adicionar?</b></span>
                <select
                  className="options__select"
                  value={this.state.account_type}
                  onChange={this.handleAccountType}
                >
                  <option value="checking">Conta Corrente</option>
                  <option value="savings">Conta Poupança</option>
                  <option value="credit">Cartão de Crédito</option>
                </select>
              </div>

              <div className="popup__options--account-input ">
                <span><b>Dê um nome para a conta:</b></span>
                <input
                  className="popup__text-input"
                  type="text"
                  value={this.state.account_name}
                  onChange={this.handleNameChange}
                />
              </div>

              <div className="popup__options--account-input">
                <span><b>Qual o balanço atual da conta?</b></span>
                <input
                  className="popup__text-input"
                  type="text"
                  value={this.state.account_balance}
                  onChange={this.handleBalanceChange}
                />
              </div>

              <input type="submit" value="Enviar" className="popup__send-button"/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}