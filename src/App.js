import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

import BidList from './BidList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      items: []
    };
    setInterval(this.performAPIRequest.bind(this), 1000);
  }

  render() {
    return (
      <div className="App-container">
        <BidList items={this.state.items} />
      </div>
    );
  }

  performAPIRequest() {
    self = this;
    $.ajax({ 
      type: 'GET', 
      url: 'http://pennyauctionserver.herokuapp.com/auctions', 
      data: { get_param: 'value' }, 
      success: function (data) { 
        self.setState({ items: data });
      }
    });
  }

}

export default App;


    