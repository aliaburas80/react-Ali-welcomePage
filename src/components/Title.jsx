var React = require('react');
var PropTypes = React.PropTypes;
var Title = React.createClass({
  render: function() {
    return (
      <h1>{this.props.title_text}</h1>
    );
  }
});

module.exports = Title;
