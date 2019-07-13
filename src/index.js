//import * as d3 from 'd3'; //not sure if import goes here or in d3.js file - was receiving error about location when it was in d3.js, probably b/c dependency graph?

//const circle = d3.selectAll("circle");

//circle.style("fill", "steel blue");

//circle.attr("r", 30);


window.onload = function(){
      $.get("/src/nav.html", function(data){
          $("#common-navbar").html(data);
          $('.navbar-nav').find('li:nth-child(2)')
            .addClass('active')
            .find('a').append('<span class="sr-only">(current)</span>');
      });
  };
