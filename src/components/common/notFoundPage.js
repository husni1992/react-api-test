"use strict";

var React = require('react');
var Link = require('react-router').Link;

var notFoundPage = React.createClass({
   render: function(){
       return (
         <div>
         <h1>Not found</h1>
         <p>Whoops looks like you are lost</p>
         <p><Link to="app">Go back home</Link></p>
         </div>
       );
   }
});

module.exports = notFoundPage;