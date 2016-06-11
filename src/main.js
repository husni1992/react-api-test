$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homepage');
var About = require('./components/about/aboutpage');
var Header = require('./components/common/header.jsx');
var ImageBox = require('./components/imagebox/imagebox');
var AuthorPage = require('./components/authors/authorPage');
var route = require('./routes');

(function(win){
"use strict";
var App = React.createClass({
   render: function(){
       var Child;
       
       switch(this.props.route){
           case 'about': Child = About; break;
           case 'authors': Child = AuthorPage; break;
           default: Child = Home;
       }
       
       return (
            <div>
                <Header/>
                <ImageBox/>
                <Child/>
            </div>
       );
   } 
});

function render(){
    var route = window.location.hash.substr(1);
    // props are passed like below, route is a prop
    React.render(<App route={route} name="Husny"/>, document.getElementById('app'));
    //React.render(<ImageBox/>, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();
    
})(window);