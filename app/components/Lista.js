var React = require('react');

function Lista(props) {
  var Lista = props.beer ?
    (
      <div className="row">
        <div className="col-lg-4">
          <h2>{props.beer.data.nameDisplay}</h2>
          <p>{props.beer.data.name}</p>
          <p>Description: {props.beer.data.description}</p>
        </div>
      </div>
    ) : null;

    return Lista;
}


module.exports = Lista;