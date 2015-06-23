/** @jsx React.DOM */

var React = require('react');
var _ = require('lodash');

var dataGenerator = require('./dataGenerator');
var Chart = require('./Chart');

require('./App.less');

// var _data = dataGenerator.generate(50);
var _data = [
      {id: '1',  x: 5,  y: 10, z: 1},
      // {id: '2',  x: 10, y: 15, z: 2},
      {id: '3',  x: 15, y: 20, z: 3},
      // {id: '4',  x: 20, y: 25, z: 4},
      {id: '5',  x: 25, y: 30, z: 5},
      // {id: '6',  x: 30, y: 35, z: 7},
      {id: '7',  x: 35, y: 40, z: 8},
      // {id: '8',  x: 40, y: 45, z: 9},
      {id: '9', x: 45, y: 50, z: 10}
  ];

function getData(x1, x2) {
  return _.filter(_data, function(d) {
    // the filter return result that include end point
    return d.x >= x1 && d.x <= x2;
  });
}

var App = React.createClass({
  getInitialState: function() {
    return {
      data: getData(0, 30),
      domain: {x: [0, 30], y: [0, 100]}
    };
  },

  render: function() {
    return (
      <div className="App">
        <p>Chart</p>
        <Chart
          data={this.state.data}
          domain={this.state.domain}
          />
      </div>
    );
  }
});

module.exports = App;
