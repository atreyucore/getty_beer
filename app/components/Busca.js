var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('grommet/components/Button');
var SearchIcon = require('grommet/components/icons/base/Search');
var AddIcon = require('grommet/components/icons/base/Add');
var BeerService = require('../services/BeerService')
var Modal = require('./Modal');

var Busca = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    BeerService.getBeerName(this.refs.beername.value).then(function(response) {
      this.props.updateBeer(response.data.data[0]);
    }.bind(this));
  },
  render: function() {
    return(
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
        <Button onClick={this.handleSubmit} icon={<SearchIcon />} label="Search" plain={true} />
        <Button onClick={"<Modal />"} icon={<AddIcon />} label="Add Beer" plain={true} />
      </form>
      
    );
  }
});


Busca.propTypes = {
  updateBeer: React.PropTypes.func.isRequired
};

module.exports = Busca;