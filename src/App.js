import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Sidebar from './components/Sidebar/index';
import Navbar from './components/Navbar/index';

import BudgetTableContainer from './containers/BudgetTableContainer';

class App extends Component {
  render() {
    return (
      <div>
      <div className="wrapper">
        <Sidebar />

        <div className="main">
          <Navbar />
          <main className="content">
            <Switch>
              <Route path="/budget" component={BudgetTableContainer} />
            </Switch>
          </main>
        </div>

      </div>
      </div>
    );
  }
}

export default App;
