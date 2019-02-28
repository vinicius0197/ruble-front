import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Sidebar from './components/Sidebar/index';
import Navbar from './components/Navbar/index';
import Dashboard from './components/Dashboard/index';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar />

        <div className="main">
          <Navbar />
          <main className="content">
            <Switch>
              <Route path="/budget" component={Dashboard} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
