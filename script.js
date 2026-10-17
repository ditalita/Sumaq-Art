/* SUMAQ ART - GALLERY INTERACTIONS */

function filterArt(category) {
  // Find all artwork cards
  const artworks = document.querySelectorAll(".art-card");

  // Show or hide artwork based on category
  artworks.forEach(function(art) {
    if (category === "all" || art.classList.contains(category)) {
      art.style.display = "block";
    } else {
      art.style.display = "none";
    }
  });

  // Highlight the selected filter button
  const buttons = document.querySelectorAll(".filters button");

  buttons.forEach(function(button) {
    button.classList.remove("active");

    const buttonCategory = button.textContent.trim().toLowerCase();

    if (
      buttonCategory === category ||
      (category === "all" && buttonCategory === "all") ||
      (category === "painting" && buttonCategory === "paintings")
    ) {
      button.classList.add("active");
    }
  });
}

// Select "All" when the website first loads
document.addEventListener("DOMContentLoaded", function() {
  filterArt("all");
});
