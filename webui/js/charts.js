var dataset = [ {name: "answered", count: 900},
{name: "not answered", count: 100}];

var dataset2 = [ {name: "answered", count: 300},
{name: "not answered", count: 600}];

var width       = 180;
var height      = 180;
var donutWidth  = 10;
var radius      = Math.min(width, height) / 2;

var legendRectSize  = 18;
var legendSpacing   = 4;

var color = d3.scale.ordinal().range(['#2ecc71', '#2c3e50']);
var color2 = d3.scale.ordinal().range(['#2ecc71', '#c0392b']);

var svg = d3.select('#chart')
.append('svg')
.attr('width', width)
.attr('height', height)
.append('g')
.attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

var svg2 = d3.select('#chart2')
.append('svg')
.attr('width', width)
.attr('height', height)
.append('g')
.attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');


var arc = d3.svg.arc()
.innerRadius(radius - donutWidth)
.outerRadius(radius);

var pie = d3.layout.pie()
.sort(null)
.value(function(d) {return d.count; });

var g = svg.selectAll(".arc")
.data(pie(dataset))
.enter().append("g")
.attr("class", "arc");

g.append('path')
// .attr("filter", "url(#dropshadow)")
.attr("fill", function(d, i) { return color(i); })
.transition()
.duration(750)
.attrTween("d", tweenPie);

var g2 = svg2.selectAll(".arc")
.data(pie(dataset2))
.enter().append("g")
.attr("class", "arc");

g2.append('path')
// .attr("filter", "url(#dropshadow)")
.attr("fill", function(d, i) { return color2(i); })
.transition()
.duration(750)
.attrTween("d", tweenPie);

function tweenPie(finish) {
  var start = {
    startAngle: 0,
    endAngle: 0
  };
  var i = d3.interpolate(start, finish);
  return function(d) { return arc(i(d)); };
}

var testString = "900/1000";

svg.append("text")
   .attr("text-anchor", "middle")
   .text(testString)
   .style("fill", '#2c3e50')
   .style("font-size", '20px')
   .style("font-weight", '600')

// var definition = svg.append('g')
// .attr('transform', 'translate(-10,0)');
//
// definition.append('text')
// .attr('x', -(testString.length)*3)
// .attr('y', 0)
// .text(function(d) { return testString; });

    /* For the drop shadow filter... */
 // var defs = svg.append("defs");

 // var filter = defs.append("filter")
 //     .attr("id", "dropshadow")
 //
 // filter.append("feGaussianBlur")
 //     .attr("in", "SourceAlpha")
 //     .attr("stdDeviation", 4);
 // filter.append("feOffset")
 //     .attr("dx", 2)
 //     .attr("dy", 2)
 //     .attr("result", "offsetBlur");
 //     filter.append("feFlood")
 //            .attr("in", "offsetBlur")
 //            .attr("flood-color", "#3d3d3d")
 //            .attr("flood-opacity", "0.5")
 //            .attr("result", "offsetColor");
 //
 //            filter.append("feComposite")
 //                 .attr("in", "offsetColor")
 //                 .attr("in2", "offsetBlur")
 //                 .attr("operator", "in")
 //                 .attr("result", "offsetBlur");
 //
 // var feMerge = filter.append("feMerge");
 //
 // feMerge.append("feMergeNode")
 //     .attr("in", "offsetBlur")
 // feMerge.append("feMergeNode")
 //     .attr("in", "SourceGraphic");
