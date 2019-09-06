
// Make the navbar disappear on scroll down and reappear on scroll up.
let nav = document.querySelector("nav");
let new_scroll_position = 0;
let last_scroll_position;


window.addEventListener('scroll', function(e) {
  last_scroll_position = window.scrollY;

  // Scrolling down
  if (new_scroll_position < last_scroll_position && last_scroll_position > 70) {
      nav.classList.remove("slideDown");
      nav.classList.add("slideUp");

  // Scrolling up
  } else if (new_scroll_position > last_scroll_position) {
      nav.classList.remove("slideUp");
      nav.classList.add("slideDown");
  }

  new_scroll_position = last_scroll_position;
});