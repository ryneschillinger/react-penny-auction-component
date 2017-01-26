import React, { Component } from 'react';
import './BidList.css';

import BidItem from './BidItem';

class BidList extends Component {
  render() {
    const bidItems = this.props.items.map((bidItem, index) => {
      return <BidItem key={index} item={bidItem} />
    });

    return (
      <div className="BidList">
        {bidItems}
      </div>
    );
  }
}

export default BidList;
    