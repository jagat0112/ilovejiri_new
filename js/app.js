import lightGallery from "lightgallery.js";

const collabsible = document.querySelectorAll(".collapsible");

collabsible.forEach((c) => {
  c.addEventListener("click", function () {
    this.classList.toggle("collapsible--active");
  });
});

lightGallery(document.getElementById("footer-gallery__items"), {
  selector: ".lightgallery",
});
