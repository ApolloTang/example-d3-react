var d3 = require('d3');

require('./d3Chart.less');

var ns = {};

ns.create = function(el, state) {
  d3.select(el).append('svg')
      .attr('class', 'd3')
      .attr('width', state.width)
      .attr('height', state.height)
    .append('g')
      .attr('class', 'd3-points');

  this.update(el, state);
};

ns.update = function(el, state) {
  var scales = this._scales(el, state.domain);
  var prevScales = this._scales(el, state.prevDomain);
  this._drawPoints(el, scales, state.data, prevScales);
};

ns._scales = function(el, domain) {
  if (!domain) {
    return null;
  }

  var width = el.offsetWidth;
  var height = el.offsetHeight;

  var x = d3.scale.linear()
    .range([0, width])
    .domain(domain.x);

  var y = d3.scale.linear()
    .range([height, 0])
    .domain(domain.y);

  var z = d3.scale.linear()
    .range([5, 20])
    .domain([1, 10]);

  return {x: x, y: y, z: z};
};

ns._drawPoints = function(el, scales, data, prevScales) {
  var animationDuration = 2400;
  var g = d3.select(el).selectAll('.d3-points');

  var point = g.selectAll('.d3-point')
    .data(data, function(d) { return d.id; });
          point[0].forEach(function(e){
              if (e) {
                  console.log('point: ', e.__data__, e);
              } else {
                  console.log('point: ' );
              }
          });


  var p2 =  point.enter().append('circle')
      .attr('class', 'd3-point')
      .attr('id', function(d){return d.id})
/*
        p2[0].forEach( function(e){
            if (e) {
                console.log('p2..: ', e.__data__, e );
            } else {
                console.log('p2..: ' );
            }
        });


  var p3 = p2.attr('cx', function(d) {
        if (prevScales) {
            console.log('previoius');
          return prevScales.x(d.x);
        }
            console.log('current');
        return scales.x(d.x);
      })
        p3[0].forEach( function(e){
            if (e) {
                console.log('p3..: ', e.__data__, e );
            } else {
                console.log('p3..: ');
            }
        });
        debugger;

  var p4 = p3.transition()
      .duration(animationDuration)
      .attr('cx', function(d) { return scales.x(d.x); });

        p4[0].forEach( function(e){
            if (e) {
                console.log('p4..: ', e.__data__, e );
            } else {
                console.log('p4..: ' );
            }
        });
        debugger;

        point[0].forEach(function(e){
            if (e) {
                console.log('point: ', e.__data__, e);
            } else {
                console.log('point: ');
            }
        });
*/
  var p5 = point
      .attr('cy', function(d) { return scales.y(d.y); })
      .attr('r', function(d) { return scales.z(d.z); })

        p5[0].forEach( function(e){
            if (e) {
                console.log('p5..: ', e.__data__, e );
            } else {
                console.log('p5..: ');
            }
        });
        debugger;

  var p6 = p5.transition()
      .duration(animationDuration)
      .attr('cx', function(d) { return scales.x(d.x); });

        p6[0].forEach( function(e){
            if (e) {
                console.log('p6..: ', e.__data__, e );
            } else {
                console.log('p6..: ' );
            }
        });

  point.exit()
    .transition()
      .duration(animationDuration)
      .attr('cx', function(d) { return scales.x(d.x); })
      .remove();
};

ns.destroy = function(el) {

};

module.exports = ns;
