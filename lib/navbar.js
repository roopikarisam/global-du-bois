"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var navBarModule = function navBarModule() {
  window.onload = function nav() {
    $.get("/src/nav.html", function (data) {
      $("#common-navbar").html(data);
      $(".navbar-nav").find("li:nth-child(2)").addClass("active").find("a").append('<span class="sr-only">(current)</span>');
    });
  };
};

var _default = navBarModule;
exports["default"] = _default;