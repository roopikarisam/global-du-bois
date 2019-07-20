"use strict";

var _navbar = _interopRequireDefault(require("./navbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _navbar["default"])();
console.log("letters page");
/* window.onload = function nav() {
  $.get('/src/nav.html', (data) => {
    $('#common-navbar').html(data);
    $('.navbar-nav').find('li:nth-child(2)')
      .addClass('active')
      .find('a')
      .append('<span class="sr-only">(current)</span>');
  });
}; */