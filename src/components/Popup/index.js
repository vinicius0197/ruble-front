import React, { Component } from 'react';

export default class AccountPopup extends Component {
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
                <select className="options__select">
                  <option value="checking">Conta Corrente</option>
                  <option value="savings">Conta Poupança</option>
                  <option value="credit">Cartão de Crédito</option>
                </select>
              </div>

              <div className="popup__options--account-input ">
                <span><b>Dê um nome para a conta:</b></span>
                <input className="popup__text-input" type="text"/>
              </div>

              <div className="popup__options--account-input">
                <span><b>Qual o balanço atual da conta?</b></span>
                <input className="popup__text-input" type="text"/>
              </div>

              <input type="submit" value="Enviar" className="popup__send-button"/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}