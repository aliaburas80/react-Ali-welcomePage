var React = require('react');
var Title = require('./Title.jsx');
var ButtonBlue = require('./ButtonBlue.jsx');
var Description = require('./Description.jsx');
var PropTypes = React.PropTypes;
var welcomePage = React.createClass({

  render: function() {
    return (
      <div>
          <Title title_text={"Ali Abu Ras!"} />
          <Description text={"Just a couple of thoughts. I m using 8 exciters and havent really experimented with much else Just a couple of thoughts. I m using 8 exciters and havent really experimented with much else"} />
        <ButtonBlue buttonName={"Thank you ;)"}/>
      </div>
    );
  }

});

module.exports = welcomePage;
