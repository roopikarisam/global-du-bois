import defaultExport from "./navbar";

defaultExport();
// how to call the function?

// trying to make import work since apparently code in nabar is a module
console.log("about page");

/* window.onload = function nav() {
  $.get('/src/nav.html', (data) => {
    $('#common-navbar').html(data);
    $('.navbar-nav').find('li:nth-child(2)')
      .addClass('active')
      .find('a')
      .append('<span class="sr-only">(current)</span>');
  });
}; */
