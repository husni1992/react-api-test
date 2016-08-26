"use strict";

var React = require('react');
var InputElement = require('../common/textInput');

var AuthorForm = React.createClass({
    render: function(){
       return (
            <form>
				<h1>Manage Author</h1>
				<InputElement
					name="firstName"
					label="First Name"
					onChange={this.props.onChange}
					placeholder="First Name"
					value={this.props.author.firstName} />

				<InputElement
					name="lastName"
					label="Last Name"
					placeholder="Last Name"
					onChange={this.props.onChange}
					value={this.props.author.lastName} />

				<input type="submit" value="Save" className="btn btn-default" />
			</form>
       );
    }
});

module.exports = AuthorForm;

