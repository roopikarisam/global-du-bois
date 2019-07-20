/* import * as d3 from 'd3'; */
import defaultExport from "./navbar";

defaultExport();

// not sure if import goes here or in d3.js file -
// was receiving error about location when it was in d3.js,
// probably b/c dependency graph?

/* window.onload = function nav() {
  $.get('/src/nav.html', (data) => {
    $('#common-navbar').html(data);
    $('.navbar-nav').find('li:nth-child(2)')
      .addClass('active')
      .find('a')
      .append('<span class="sr-only">(current)</span>');
  });
}; */

/* const square = d3.selectAll('rect');
square.style('fill', 'orange'); */

console.log("this is home");
