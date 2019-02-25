import React, { Component } from 'react';
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
            <Dashboard />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
