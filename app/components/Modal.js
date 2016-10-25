var React = require('react');
var Paragraph = require('grommet/components/Paragraph');
var Title = require('grommet/components/Title');
var Layer = require('grommet/components/Layer');
var CloseIcon = require('grommet/components/icons/base/Close');


var Modal = React.createClass({
  render: function(props) {
    var modal = this.props.beer ?
    (
      <Layer onClose={close} closer={true} align="top">
          <Title>{this.props.beer.name}</Title>
          <Paragraph>Description: {this.props.beer.description}</Paragraph>
          <Paragraph>Description: {this.props.beer.glass.name}</Paragraph>
      </Layer>
     

    ) : null
    return modal;
  }
});

Modal.propTypes = {
  beer: React.PropTypes.object
};

module.exports = Modal;