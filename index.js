
// Regular Bar Chart
var bardata = [80, 100, 56, 120, 180, 30, 40, 120, 160]

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / bardata.length);

var svg = d3.select('.bar-chart')
  // .style('background-color', 'red')
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var barChart = svg.selectAll("rect")
  .data(bardata)
  .enter()
  .append("rect")
  .attr("y", function (d) {
    return svgHeight - d
  })
  .attr("height", function (d) {
    return d;
  })
  .attr("width", barWidth - barPadding)
  .attr("transform", function (d, i) {
    var translate = [barWidth * i, 0];
    return "translate(" + translate + ")";
  })
// To display the values on top of the bargraph
var text = svg.selectAll("text")
  .data(bardata)
  .enter()
  .append("text")
  .text(function(d) {
    return d;
  })
  .attr("y", function(d, i) {
    return svgHeight - d - 2;
  })
  .attr("x", function(d, i) {
    return barWidth * i + (barWidth/2);
  })
  .attr("fill", "#A64c38")
  .attr("text-anchor", "middle")
;

// Bar Chart to Scale
var barChartScale = [1,2,3,4,5];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / barChartScale.length);


var svg = d3.select('.bar-chart-scale')
    .attr("width", svgWidth)
    .attr("height", svgHeight);
    
var yScale = d3.scaleLinear()
    .domain([0, d3.max(barChartScale)])
    .range([0, svgHeight - 10]);
        
var barChart = svg.selectAll("rect")
    .data(barChartScale)
    .enter()
    .append("rect")
    .attr("y", function(d) {
         return svgHeight - yScale(d)
    })
    .attr("height", function(d) { 
        return yScale(d); 
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0]; 
        return "translate("+ translate +")";
    });

// Axes in DS 
var axes= [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidth = 500, svgHeight = 300;

var svg = d3.select('.axes')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var xScale = d3.scaleLinear()
    .domain([0, d3.max(axes)])
    .range([0, svgWidth]);
         
var yScale = d3.scaleLinear()
    .domain([0, d3.max(axes)])
    .range([svgHeight, 0]);
     
var x_axis = d3.axisBottom().scale(xScale);

var y_axis = d3.axisLeft().scale(yScale);
         
svg.append("g")
    .attr("transform", "translate(50, 10)")
    .call(y_axis);
         
var xAxisTranslate = svgHeight - 20;
         
svg.append("g")
    .attr("transform", "translate(50, " + xAxisTranslate  +")")
    .call(x_axis);

// SVG Elements

var svgWidth = 600, svgHeight = 500;
var svg = d3.select(".element")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "svg-container");
    
var line = svg.append("line")
    .attr("x1", 50)
    .attr("x2", 500)
    .attr("y1", 400)
    .attr("y2", 70)
    .attr("stroke", "red");