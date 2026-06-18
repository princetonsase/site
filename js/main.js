// Mobile nav toggle + active-link highlighting
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // close the menu after following a link
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // highlight the current page in the nav
  var page = document.body.getAttribute("data-page");
  if (page) {
    document.querySelectorAll(".nav a[data-nav='" + page + "']").forEach(function (a) {
      a.classList.add("active");
    });
  }
})();
