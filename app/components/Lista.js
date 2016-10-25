var React = require('react');

function Lista(props) {
  var Lista = props.beer ?
    (
      <div className="row">
        <div className="col-lg-4">
          <h2>{props.beer.name}</h2>
          <p>{props.beer.description}</p>
        </div>
      </div>
    ) : null;

    return Lista;
}

Lista.propTypes = {
  beer: React.PropTypes.object
};


module.exports = Lista;