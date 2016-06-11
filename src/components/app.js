/*eslint-disable strict */ // disabling eslint check in this file because we cant run strict mode, need global vars

var React = require('react');
var Header = require('./common/header.js');
var ImageBox = require('./imagebox/imagebox');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
   render: function(){              
       return (
            <div>
                <Header/>
                <ImageBox/>
                <div className="container-fluid">
                    <RouteHandler/>
                </div>
            </div>
       );
   } 
});

module.exports = App;