"use strict";

var d3 = _interopRequireWildcard(require("d3"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

console.log("working");
var circle = d3.selectAll("circle");
circle.style("fill", "steel blue");
circle.attr("r", 30);

window.onload = function () {
  $.get("/src/nav.html", function (data) {
    $("#common-navbar").html(data);
    $('.navbar-nav').find('li:nth-child(2)').addClass('active').find('a').append('<span class="sr-only">(current)</span>');
  });
};