import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Sidebar from './components/Sidebar/index';
import Navbar from './components/Navbar/index';

import BudgetTableContainer from './containers/BudgetTableContainer';
import Transaction from './components/Transaction';

export default class App extends Component {
  render() {
    let params = new URLSearchParams(window.location.search);
    return (
      <div>
      <div className="wrapper">
        <Sidebar />

        <div className="main">
          <Navbar />
          <main className="content">
            <Switch>
              <Route path="/budget" component={BudgetTableContainer} />
              <Route path="/transactions" render={()=> <Transaction account={params.get("account")} />} />
            </Switch>
          </main>
        </div>

      </div>
      </div>
    );
  }
}