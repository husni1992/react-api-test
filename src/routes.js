"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

// if we didnt use path="/" in a route element, the name will be the url
var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homepage')} />
        <Route name="authors" handler={require('./components/authors/authorPage')} />                               
        <Route name="about" handler={require('./components/about/aboutpage')} />
        <NotFoundRoute handler={require('./components/common/notfoundPage')} />
        <Redirect from="about-us" to="about" />
        <Redirect from="authrs" to="authors" />
        <Redirect from="about/*" to="about" />        
    </Route>
);

module.exports = routes;