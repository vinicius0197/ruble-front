import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Sidebar from './components/Sidebar/index';
import Navbar from './components/Navbar/index';

import BudgetTableContainer from './containers/BudgetTableContainer';
import Transaction from './components/Transaction';

import { Spin } from 'antd';
import "antd/dist/antd.css";

const axios = require('axios');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  fetchData = () => {
    axios.get('http://127.0.0.1:8000/budget.json')
    .then((response) => {
      this.setState({
        data: response.data,
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    let params = new URLSearchParams(window.location.search);
    let loading = this.state.data.length === 0;
    return (
      <div>
        { loading ? 
        <div className="spinner"><Spin /></div>  
          :
        <div className="wrapper">
        <Sidebar />

        <div className="main">
          <Navbar />
          <main className="content">
            <Switch>
              <Route path="/budget" component={BudgetTableContainer} />
              <Route
                path="/transactions"
                render={()=> <Transaction account={params.get("account")} data={this.state.data} />}
              />
            </Switch>
          </main>
        </div>
      </div>
      }
      </div>
    );
  }
}