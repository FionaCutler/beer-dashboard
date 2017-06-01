import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import '../api/beers.js';


import BeerItem  from './beeritem.jsx'

export default class BeerList extends Component {
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">History
                        <small> click to remove</small>
                    </h3>
                </div>
                <div className="panel-body">
                    <ul>
                        {this.renderBeers()}
                    </ul>
                </div>
            </div>
        );
    }

    renderBeers(){
        let beers = this.props.beers;
        return beers.map((beer) => {
            return (<BeerItem key={beer._id} beer={beer}/>);
        });
    }
}