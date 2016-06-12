React with Flux Starter Kit of this tute :- https://github.com/coryhouse/react-flux-starter-kit
Packages need to be installed initially:- npm install --save gulp@3.9.0 gulp-connect@2.2.0 gulp-open@1.0.0
Packages need to be installed for live reload :- npm install --save browserify@11.0.1 reactify@1.1 vinyl-source-stream@1.1.0
Bootstrap n etc :-  npm install --save bootstrap@3.3.5 jquery@2.1.4 gulp-concat@2.6.0
jslint :- npm install --save gulp-eslint@0.15.0

WHY REACT
----------
JSX - Markup in js , (html)
Virtual DOM - Enhances by minimizing expensive updates to the dom
Isomorphic Rendering - Render in client and server
Unidirectonal dataflows - Easer to reason about, single direction by centrazlied dispatcher

Versions used in this tute
----------------------------
React 0.13.3
React-router 0.13.3
Flux 2.0.3

Technologies used
------------------
NodeJS
Browserfy
React Component
React/ROUTER
FLUX unidirectional dataflows
Gulp

 
-CommonJS Pattern- requireJS
----------------------
var dependancy = require('/path/to/file')

// declare module
var myModule = {
  // code here
}

// expose to others
module.exports = myModule

-Browserfy-
---------------
To get all node packages in browser reference in index.html
Bundle all node modules into one single file, minimizing http requests


-React-
---------
Component Library
Simple composition
Utilizes virtual dom, when ui changes react comes from old states to new states and updates dom
rener in client and server

-ReaCT router-
--------------


-FLUX-
unidirectional dataflow patter
more a pattern than library


-Gulp-
-------
Keeps all work in memeory not writing in disk,, dats why its fast
type package.json to read the file inside cmd itself



React Component lifecycle Methods - https://facebook.github.io/react/docs/component-specs.html
------------------------------------------------------------------------------------------------

Props - <div route="/abc"/> Immtable. looks like html attributes, passed down from parent to chils

State - Holds mutable state, this.state.username , this.setState({authors: AuthorApi.getAllAuthors()});

* componentWillMount: before initial render client and server - best place to set initial state
* componentDidMount: after render - now component dom exists, can integrate with other frameworks now, set timers, ajax reqs
* componentWillReceiveProps: recieving new props, or probs are changed, not called in initial render, can use this to set state before the next render
* shouldComponentUpdate: Runs before render and when new props and states are reveived, not called on initial render/ this is done for performance, return false to avoid unnesesary re-renders
* componentWillUpdate: Immediately before rendering when new props and state are recived, cannot call set state
* componentDidUpdate: After component's updates are flushed    
* componentWillUnmount: just before component unmounted by the dom, in here we cleanup by destroying related resources, or dom elements


**props validation**  only in development mode, not in minified
----------------------------------------------------------------
**> Validation isnt run in production(minified) version of React

propTypes:{
    author: React.PropTypes.object.isRequried,
    onSave: React.PropTypes.func.isRequired,
    validate: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object,
    hasErrors: React.PropTypes.func.isRequires
}

optionalArray: React.PropTypes.array,
optionalBool: React.PropTypes.bool,
optionalFunc: React.PropTypes.func,
optionalNumber: React.PropTypes.number,
optionalObject: React.PropTypes.object,
optionalString: React.PropTypes.string


Controller View  - Smart components that passs data to dumb component(child) via props
------------------
Its a top level react component
This controlls data flows for all of its child components, by setting props on child comppnents. It will interact flux stores


Mixins
--------
For coss-cutting multiple components
Share code between multiple components


React Router
-------------
Route: Declaratively map a route
DefaultRoute: "/." like for index.html
NotFoundRoute: client-side-404
Redirect: redirect :)

Links
------

Url: /user/1
Route: <route name="user" path="/user/:userId" />
JSX: <Link to="user" params={{userId: 1}}>Bobby Tables </Link>
The to param refers to the Route name in router<Link to="about">About page </Link>
<a href="/user/1">Bobby Tables </a>

handle 404: 
	var NotFoundRoute = Router.NotFoundRoute;
	<NotFoundRoute handler={require('./components/common/notfoundPage')} />

redirect: 
	<Redirect from="about-us" to="about" /> 
	simple as that :)	

Router transitions
------------------
willTransitionTo : function when transition to a particular state
willTransitionFrom: function when exiting from a page	