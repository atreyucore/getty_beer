var React = require('react');
var ReactDOM = require('react-dom');
var Busca = require('./Busca');
var Modal = require('./Modal');
var Formulario = require('./Formulario');
var Nav = require('./Nav');

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
      
      <div className="jumbotron">
        <h1>Getty Beer</h1>
        <div className="row">
          <Nav />
          <Busca
          updateBeer={this.updateBeer}
          />
          <Modal
            beer={this.state.beer}
          />
          <Formulario />  
        </div>
      </div>
        
      </div>
    );
  }
});

module.exports = GettyBeer;