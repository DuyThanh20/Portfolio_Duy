// JavaScript Document
const pages = Array.from(document.querySelectorAll(".page"));
    let current = 0;

    function nextPage() {
      if (current < pages.length) {
        pages[current].classList.add("flipped");
        current++;
      }
    }

    function prevPage() {
      if (current > 0) {
        current--;
        pages[current].classList.remove("flipped");
      }
    }