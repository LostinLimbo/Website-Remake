
let list = document.querySelector(".cycle > li");
let nav = document.querySelector("nav");
let new_scroll_position = 0;
let last_scroll_position;

// Make the navbar disappear on scroll down and reappear on scroll up.
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

// Cycle through the services offered!
var services = [
  "Fed Up with Books and Paperwork?",
  "<img src=\"Assets\/CSS\/Img-lib\/pages-image.gif\">",
  "We Can Help!",
  "Free initial Consultation",
  "Individual Self-Assessment Tax Returns",
  "P.A.Y.E. Scheme, Set up and Control",
  "Business Start-ups",
  "Sole Traders",
  "Partnerships",
  "Privately Owned Small Limited Companies"
];




