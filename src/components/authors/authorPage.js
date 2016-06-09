"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

var AuthorPage = React.createClass({
    getInitialState: function(){
        console.info("run - getInitialState");
        return {
            authors: []
        };
    },
    
    // test these life cycle methods
    getDefaultProps: function(){
      console.info("run - getDefaultProps");
    },
    componentDidMount: function(){
      console.info("run - componentDidMount");
    },
    componentWillReceiveProps: function(){
      console.info("run - componentWillReceiveProps");
    },
    shouldComponentUpdate: function(){
      console.info("run - shouldComponentUpdate");
    },
    componentWillUpdate: function(){
      console.info("run - componentWillUpdate");
    },
    componentDidUpdate: function(){
      console.info("run - componentDidUpdate");
    },
    componentWillUnmount: function(){
      console.info("run - componentWillUnmount");
    },
    
    
    
    componentWillMount: function(){
        console.info("run - componentWillMount");
        this.setState({authors: AuthorApi.getAllAuthors()});
    },
    
   render: function(){
       console.info("RUN - render");
       
       return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors} />
            </div>
       );
   } 
});

module.exports = AuthorPage;