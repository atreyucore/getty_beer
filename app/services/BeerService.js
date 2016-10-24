var axios = require('axios');
const key = 'bc247e676dd24bf7965d3bace8efee51';
const url = 'http://api.brewerydb.com/v2/';

var BeerService = {
  getBeerName: function (beername) {
    return axios.get(url+'beers/?key='+key+'&name='+beername);
  }
};

module.exports = BeerService;


