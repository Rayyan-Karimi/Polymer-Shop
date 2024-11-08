// Sticky header functionality
let lastScrollTop = 0;
const topHeader = document.querySelector(".top-header");
let isHeaderVisible = true;
window.addEventListener("scroll", function () {
  let scrollTop =
    window.pageYOffset || document.documentElement.scrollTop;
  // Only activate the functionality if we're not at the top of the page
  if (scrollTop > 0) {
    topHeader.style.position = "fixed";
    topHeader.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.4)";
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      if (isHeaderVisible) {
        topHeader.style.transform = "translateY(-100%)";
        isHeaderVisible = false;
      }
      topHeader.style.opacity = "0.8";
      topHeader.style.position = "fixed"; // Keep it fixed when scrolling down
    } else {
      // Scrolling up
      if (!isHeaderVisible) {
        topHeader.style.transform = "translateY(0)"; // Show
        isHeaderVisible = true;
      }
      topHeader.style.opacity = "1"; // Change opacity to 1 when scrolling up
    }
  } else {
    // At the top of the page
    topHeader.style.position = "relative"; // Change position to relative at the top
    topHeader.style.opacity = "1"; // Ensure opacity is 1 at the top
    topHeader.style.boxShadow = "none";
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});