import React, { Component } from 'react';
import './BidItem.css';
import randomUsername from './usernameWords.js';
import $ from 'jquery';


var timerResetted = true;

class BidItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.item.username,
      currentTime: 10,
      currentBid: Number((this.props.item.price).replace(/[^0-9\.]+/g,"")),
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
      		<h4>{this.state.username}</h4>
      		<button className="btn btn-bid" onClick={() => this.addBid()} id={this.props.item.id}>
      			Bid Now
      		</button>
      	</div>
      </div>
    );
  }

  addBid() {
  	this.setState({
      username: 'ryneschillinger',
  		currentTime: 10,
  		currentBid: (this.state.currentBid + 0.01),
  	});

  	timerResetted = true;

    $.ajax({ 
      type: 'PUT', 
      url: 'http://pennyauctionserver.herokuapp.com/auctions/' + this.props.item.id, 
      data: JSON.stringify(this.state.username),
      success: function (res) { 
        console.log(res);
      }
    });
  }

  countdown() {
  	let self = this;
  	let bidButtonID = this.props.item.id;
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

  randomUsername() {

  }

}

export default BidItem;