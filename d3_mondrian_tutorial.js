document.addEventListener('DOMContentLoaded', function(e) { 
  console.log('test');
  // Step 1: Create a canvas to draw the svg on.
  var canvas = d3.select('#mondrian') // We use the body as a selector, but virtually any div can be used.
                  .append('svg')
                  .attr('width',700)
                  .attr('height',800);

  // Step 2: Add a circle to the canvas
  var frame = canvas.append('rect')
                    .attr('width',550)
                    .attr('height',650)
                    .attr('x',75)
                    .attr('y',75)
                    .attr('fill', 'none')
                    .attr('stroke','black')
                    .attr('stroke-width',10);

  var red = canvas.append('rect')
                    .attr('width',370)
                    .attr('height',435)
                    .attr('x',250)
                    .attr('y',80)
                    .attr('fill', 'red');

  var blue = canvas.append('rect')
                    .attr('width',170)
                    .attr('height',200)
                    .attr('x',80)
                    .attr('y',520)
                    .attr('fill', 'blue');

  var yellow = canvas.append('rect')
                    .attr('width',80)
                    .attr('height',100)
                    .attr('x',540)
                    .attr('y',620)
                    .attr('fill', 'yellow');

  var vertical = canvas.append('line')
                    .attr('x1', 245)
                    .attr('y1', 80)
                    .attr('x2',245)
                    .attr('y2',730)
                    .attr('stroke','black')
                    .attr('stroke-width',10);

  var horizontal = canvas.append('line')
                      .attr('x1', 80)
                      .attr('y1', 520)
                      .attr('x2',620)
                      .attr('y2',520)
                      .attr('stroke','black')
                      .attr('stroke-width',10);

  var fatHorizontal = canvas.append('line')
                      .attr('x1', 80)
                      .attr('y1', 200)
                      .attr('x2',250)
                      .attr('y2',200)
                      .attr('stroke','black')
                      .attr('stroke-width',20);

  var smallHorizontal = canvas.append('line')
                      .attr('x1', 540)
                      .attr('y1', 620)
                      .attr('x2',620)
                      .attr('y2',620)
                      .attr('stroke','black')
                      .attr('stroke-width',10);

  var vertical = canvas.append('line')
                    .attr('x1', 540)
                    .attr('y1', 520)
                    .attr('x2',540)
                    .attr('y2',730)
                    .attr('stroke','black')
                    .attr('stroke-width',10);

});