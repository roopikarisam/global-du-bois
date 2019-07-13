"use strict";

var d3 = _interopRequireWildcard(require("d3"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

// not sure if import goes here or in d3.js file -
// was receiving error about location when it was in d3.js,
// probably b/c dependency graph?
console.log('this is home');

window.onload = function nav() {
  $.get('/src/nav.html', function (data) {
    $('#common-navbar').html(data);
    $('.navbar-nav').find('li:nth-child(2)').addClass('active').find('a').append('<span class="sr-only">(current)</span>');
  });
};

var square = d3.selectAll('rect');
square.style('fill', 'orange');