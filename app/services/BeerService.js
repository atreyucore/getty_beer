import axios from 'axios';

const BeerService = {
  getBeerName(beername) {
    return axios.get(`http://api.brewerydb.com/v2/beers/?key=bc247e676dd24bf7965d3bace8efee51&name=${beername}`);
  },
  getStyles() {
    return axios.get(`http://api.brewerydb.com/v2/styles/?key=bc247e676dd24bf7965d3bace8efee51`);
  }
};

module.exports = BeerService;


