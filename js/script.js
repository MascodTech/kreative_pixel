const anchors = document.querySelectorAll('.header a[href*="#"], .footer a'),
  navbar = document.querySelector(".navbar"),
  p = navbar.offsetTop;

for (let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    if (!this.getAttribute("data-noscroll")) {
      e.preventDefault();

      const blockID = anchor.getAttribute("href");

      document.querySelector(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
}

