import React, { Component } from 'react';
import './BidItem.css';


var timerResetted = true;

class BidItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: 10,
      currentBid: 0.00,
    }
  }

  render() {
    return (
      <div className="BidItem" onLoad={() => this.countdown()}>
      	<div className="BidItem-header">
      		<h4>{this.props.item.title}</h4>
      	</div>
      	<div className="BidItem-main">
      		<img src={this.props.item.img} alt="product-thumb"/>
      		<h2>00:00:{this.state.currentTime}</h2>
      		<h3>${(this.state.currentBid).toFixed(2)}</h3>
      		<h4>{this.props.item.username}</h4>
      		<button className="btn btn-bid" onClick={() => this.addBid()} id={this.props.item.name}>
      			Bid Now
      		</button>
      	</div>
      </div>
    );
  }

  addBid() {
  	this.setState({
  		currentTime: 10,
  		currentBid: (this.state.currentBid + 0.01),
  	});
  	timerResetted = true;
  }

  countdown() {
  	let self = this;
  	let bidButtonID = this.props.item.name;
  	if (timerResetted === true) {
	  	var timer = setInterval(function() {
	  		timerResetted = false;
		  	self.setState({ currentTime: "0" + (self.state.currentTime - 1) });
		  	if (self.state.currentTime == 0) {
		  		clearInterval(timer);
		  		document.getElementById(bidButtonID).style.visibility = "hidden";
		  	}
	  	}, 1000);
	  }
  }

}

export default BidItem;