"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

// add this as 2nd param to remove hash# in url "Router.HistoryLocation,"
Router.run(routes, function(Handler){
    React.render(<Handler/>, document.getElementById('app'));
});




