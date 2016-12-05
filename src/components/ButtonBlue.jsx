var React = require('react');
var PropTypes = React.PropTypes;

var BluButton = React.createClass({

  render: function() {
    return (
      <div><span>{this.props.buttonName}</span></div>
    );
  }

});

module.exports = BluButton;
