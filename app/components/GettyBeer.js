import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Busca from './Busca';
import Modal from './Modal';
import Formulario from './Formulario';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';


class GettyBeer extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        beer: null
      }
      	this.updateBeer = this.updateBeer.bind(this);
        this._onCLose = this._onCLose.bind(this);
  }
  _onCLose() {
    this.props.onClose();
  }

  updateBeer(beer) {
    this.setState({beer: beer});
  }

  render() {
    return(
      <div className="container">
        <Box pad="medium" align="center" colorIndex="light-2">
          <Heading>Getty Beer</Heading>
          <Tabs>
            <Tab title="Search Beer">
              <Busca
                updateBeer={this.updateBeer}
              />
            </Tab>
            <Tab title="Add Beer">
              <Formulario />
            </Tab>
          </Tabs>
        </Box>
         <Modal
            beer={this.state.beer}
            onCLose={this._onCLose}
          />  
      </div>
    )
  }
}

module.exports = GettyBeer;