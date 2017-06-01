import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import '../api/beers.js';

export default class BeerForm extends Component {

    constructor(props) {
        super(props);
    }

    handleSubmit(event){
        event.preventDefault();

        const numBeers = ReactDOM.findDOMNode(this.refs.numBeers).value;
        const beerDate = ReactDOM.findDOMNode(this.refs.beerDate).value;
        Meteor.call('beers.insert',numBeers, moment(beerDate).toDate(),(e,r) => {
            if (e) alert(e.reason)
        });

        ReactDOM.findDOMNode(this.refs.numBeers).value = "";
        ReactDOM.findDOMNode(this.refs.beerDate).value = "";
    }

    render(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Beer Consumption</h3>
                </div>
                <div className="panel-body">
                    <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-group">
                            <div className="col-sm-10">
                                <input type="number" className="form-control"
                                       placeholder="How many beers?" ref="numBeers" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-10">
                                <input type="date" className="form-control" ref="beerDate"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary btn-block">Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}