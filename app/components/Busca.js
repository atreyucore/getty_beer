var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('grommet/components/Button');
var SearchIcon = require('grommet/components/icons/base/Search');
var BeerService = require('../services/BeerService')

var Busca = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    console.log(this.refs.beername.value);
    BeerService.getBeerName(this.refs.beername.value).then(function(response) {
      this.props.updateBeer(response.data);
    }.bind(this));
  },
  render: function() {
    return(
      
      <div className="jumbotron">
        <h1>Getty Beer</h1>
        <div className="row">
          <form>
            <div className="form-group">
              <label>Escolha sua breja</label>
              <input
                type="text"
                ref="beername"
                className="form-control"
                placeholder="Ex: Stella Artois"
                />
            </div>
            <Button onClick={this.handleSubmit} icon={<SearchIcon />} label="Buscar" plain={true} />
       
          </form>
        </div>
      </div>
          
      
    );
  }
});


Busca.propTypes = {
  updateBeer: React.PropTypes.func.isRequired
};

module.exports = Busca;