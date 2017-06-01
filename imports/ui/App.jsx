import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

import { Beers } from '../api/beers.js';

import BeerForm from './beerform.jsx';
import BeerList  from './beerlist.jsx'

class App extends Component{
    render(){
        return(
            <div>
            <div className="page-header">
                    <h1>
                        <i className="fa fa-beer" /> Beer
                        <small> Dashboard</small>
                    </h1>

            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <BeerForm />
                        <BeerList beers={this.props.beers}/>
                    </div>

                    <div className="col-md-offset-2 col-md-6">
                    </div>
                </div>
            </div>
        </div>);
    }
    mapData(){
        let data = [
            { qty: 0, xLabel: "Sun" },
            { qty: 0, xLabel: "Mon" },
            { qty: 0, xLabel: "Tue" },
            { qty: 0, xLabel: "Wed" },
            { qty: 0, xLabel: "Thu" },
            { qty: 0, xLabel: "Fri" },
            { qty: 0, xLabel: "Sat" },
        ];
        return this.props.beers.map((d)=>{
            return data[moment(d.date).weekday()].qty += d.beers;
        });
    }
}

App.propTypes = {
    beers: PropTypes.array.isRequired,
};
export default createContainer(() => {
    return {
        beers: Beers.find({}).fetch(),
    };
}, App);