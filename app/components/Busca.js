import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'grommet/components/Button';
import SearchIcon from 'grommet/components/icons/base/Search';
import AddIcon from 'grommet/components/icons/base/Add';
import BeerService from '../services/BeerService';
import Modal from './Modal';


class Busca extends React.Component{
  constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
  handleSubmit(e) {
    e.preventDefault();
    BeerService.getBeerName(this.refs.beername.value).then((response) => {
      this.props.updateBeer(response.data.data[0]);
      console.log(response.data.data[0]);
    })
  }
  
  render() {
    return(
      <form>
        <div className="form-group">
          <input
            type="text"
            ref="beername"
            className="form-control"
            placeholder="Ex: Stella Artois"
            />
        </div>
        <Button align="center" onClick={this.handleSubmit} icon={<SearchIcon />} label="Search" plain={true} />
      </form>
      
    )
  }
}


Busca.propTypes = {
  updateBeer: React.PropTypes.func.isRequired
};

export default Busca;