"use strict";

console.log('networks page');

window.onload = function nav() {
  $.get('/src/nav.html', function (data) {
    $('#common-navbar').html(data);
    $('.navbar-nav').find('li:nth-child(2)').addClass('active').find('a').append('<span class="sr-only">(current)</span>');
  });
};