"use strict";

// this is a controller view, smart component

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

var AuthorPage = React.createClass({
// test these life cycle methods
//    getDefaultProps: function(){
//      console.info("run - getDefaultProps");
//    },
//    componentWillMount: function(){
//      console.info("run - componentWillMount");
//    },
//    componentWillReceiveProps: function(){
//      console.info("run - componentWillReceiveProps");
//    },
//    shouldComponentUpdate: function(){
//      console.info("run - shouldComponentUpdate");
//    },
//    componentWillUpdate: function(){
//      console.info("run - componentWillUpdate");
//    },
//    componentDidUpdate: function(){
//      console.info("run - componentDidUpdate");
//    },
//    componentWillUnmount: function(){
//      console.info("run - componentWillUnmount");
//    },

    getInitialState: function(){
        return {
            authors: []
        };
    },

    componentDidMount: function(){
        if(this.isMounted){
            this.setState({authors: AuthorApi.getAllAuthors()});    
        }        
    },
    
   render: function(){
       return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
       );
   } 
});

module.exports = AuthorPage;