import React, { Component } from 'react';
import './App.css';

import BidList from './BidList';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [
        {name: '$10 Shell Gift Card', image: '/img/$10 Shell Gift Card.jpg'},
        {name: '$50 Walmart Gift Card', image: '/img/$50 Walmart Gift Card.jpg'},
        {name: '15 Voucher Bids', image: '/img/15 Voucher Bids.jpg'},
        {name: '$250 Voucher Bids', image: '/img/250 Voucher Bids.jpg'},
        {name: '50 Voucher Bids', image: '/img/50 Voucher Bids.jpg'},
        {name: 'Canon Pixma MG Wireless Printer', image: '/img/Canon Pixma MG Series Wireless Printer.jpg'},
        {name: 'Cuisinart Convection Bread Maker', image: '/img/Cuisinart Convection Bread Maker.jpg'},
        {name: 'Discrete "Hide a Key" Sprinkler Head', image: '/img/Discrete "Hide a Key" Sprinkler Head.jpg'},
        {name: 'Ultra-Soft 1800 Series Sheet Set', image: '/img/Ultra-Soft 1800 Series Sheet Set.jpg'},
        {name: 'iPad Pro 9.7" 32GB WifFi', image: '/img/iPad Pro 9.7" 32GB WifFi.jpg'}
      ]
    }
  }

  render() {
    return (
      <div className="App-container">
        <BidList items={this.state.items} />
      </div>
    );
  }
}

export default App;


    