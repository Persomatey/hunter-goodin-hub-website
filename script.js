// Update footer year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Optional: subtle click feedback
document.querySelectorAll(".link-card").forEach(card => {
  card.addEventListener("click", () => {
    card.style.transform = "scale(0.98)";
    setTimeout(() => {
      card.style.transform = "";
    }, 120);
  });
});
