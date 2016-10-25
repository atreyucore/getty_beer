var React = require('react');
var Paragraph = require('grommet/components/Paragraph');
var Title = require('grommet/components/Title');
var Layer = require('grommet/components/Layer');
var CloseIcon = require('grommet/components/icons/base/Close');


var Lista = React.createClass({
  render: function(props) {
    var lista = this.props.beer ?
    (
      <Layer onClose={close} closer={true} align="top">
          <Title>{this.props.beer.name}</Title>
          <Paragraph>Description: {this.props.beer.description}</Paragraph>
      </Layer>

    ) : null
    return lista;
  }
});

Lista.propTypes = {
  beer: React.PropTypes.object
};

module.exports = Lista;