const navBarModule = function navBarModule() {
  window.onload = function nav() {
    $.get("/src/nav.html", data => {
      $("#common-navbar").html(data);
      $(".navbar-nav")
        .find("li:nth-child(2)")
        .addClass("active")
        .find("a")
        .append('<span class="sr-only">(current)</span>');
    });
  };
};
export default navBarModule;
