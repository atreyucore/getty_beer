var React = require('react');
var Menu = require('grommet/components/Menu');
var Anchor = require('grommet/components/Anchor');
var Link = require('react-router');

var Nav = React.createClass({
  render: function () {
    return(
      <Menu inline={true} direction="row" size="small">
        <Anchor href="#" className="active">
          Search Beer
        </Anchor>
        <Anchor href="#">
          Add Beer
        </Anchor>
      </Menu>
    );
  }
});

module.exports = Nav; 