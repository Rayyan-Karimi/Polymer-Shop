window.addEventListener("load", function () {
    const img = document.querySelector("img-responsive");
    img.classList.remove("loaded"); // Reset loaded class on page load
    setTimeout(() => {
      img.classList.add("loaded"); // Reapply it to trigger transition
    }, 50); // Small delay to ensure transition is noticeable
  });