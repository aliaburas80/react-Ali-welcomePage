var React = require('react');
var PropTypes = React.PropTypes;

var description = React.createClass({

  render: function() {
    return (
      <p>
        <span>{this.props.text}</span>
      </p>
    );
  }

});

module.exports = description;
