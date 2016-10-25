var React = require('react');
var ReactDOM = require('react-dom');
var Busca = require('./Busca');
var Lista = require('./Lista');

var GettyBeer = React.createClass({

  getInitialState: function() {
    return {
      beer: null
    };
  },
  updateBeer: function(beer) {
    this.setState({beer: beer});
  },
  render: function() {
    return(
      <div className="container">
        <Busca
          updateBeer={this.updateBeer}
          />
        <Lista
          beer={this.state.beer}
        />
      </div>
    );
  }
});

module.exports = GettyBeer;