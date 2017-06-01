import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Beers = new Mongo.Collection('beers');

Meteor.methods({
    'beers.insert'(numBeers, date){
        numBeers = parseInt(numBeers);

        check(numBeers, Number);
        check(date, Date);

        return Beers.insert({beers: numBeers, date: date});
    },
    'beers.remove'(id){
        check(id, String);
        return Beers.remove(id);
    }
});