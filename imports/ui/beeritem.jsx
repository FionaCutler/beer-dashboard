import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import '../api/beers.js';

export default class BeerItem extends Component {

    render(){
        let date = moment(this.props.beer.date).format("MM/DD/YYYY");
        let tail = this.props.beer.beers > 1 ? "beers" : "beer";

        return (
            <li onClick={this.handleClick.bind(this)}>On <strong>{date}</strong> grabbed <strong>{this.props.beer.beers}</strong> {tail}</li>
        );
    }

    handleClick() {
        let id = this.props.beer._id;
        Meteor.call("beers.remove", id, function(e) {
            if (e) alert(e.reason);
        });
    }
}