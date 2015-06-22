/** @jsx React.DOM */

var React = require('react');
var _ = require('lodash');

var dataGenerator = require('./dataGenerator');
var Pagination = require('./Pagination');
var Chart = require('./Chart');

require('./App.less');

var App = React.createClass({
  getInitialState: function() {
    var domain = [0, 30];
    return {
      data: this.getData(domain),
      domain: {x: domain, y: [0, 100]},
      tooltips: [],
      prevDomain: null
    };
  },
 _allData : [
      {id: '1',  x: 5,  y: 10, z: 1},
      {id: '2',  x: 10, y: 15, z: 2},
      {id: '3',  x: 15, y: 20, z: 3},
      {id: '5',  x: 20, y: 25, z: 4},
      {id: '6',  x: 25, y: 30, z: 5},
      {id: '7',  x: 30, y: 35, z: 7},
      {id: '8',  x: 35, y: 40, z: 8},
      {id: '8',  x: 40, y: 45, z: 9},
      {id: '10', x: 45, y: 50, z: 10}
  ],

  // _allData: dataGenerator.generate(50),

  getData: function(domain) {
    return _.filter(this._allData, function(d) {
      return d.x >= domain[0] && d.x <= domain[1];
    });
  },

  render: function() {
    return (
      <div className="App">
        <p>Chart</p>
        <Pagination
          appState={this.state}
          setAppState={this.setAppState}
          getData={this.getData} />
        <Chart
          data={this.state.data}
          domain={this.state.domain}
          tooltips={this.state.tooltips}
          prevDomain={this.state.prevDomain} />
      </div>
    );
  },

  setAppState: function(partialState) {
    console.log('setAppState: ', partialState);
    return this.setState(partialState);
  }
});

module.exports = App;
