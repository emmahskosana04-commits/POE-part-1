// 1. Hamburger menu
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

// 2. Live date SA format
function updateDateTime() {
  const now = new Date();
  document.getElementById("dateTime").innerText = now.toLocaleString();
}
setInterval(updateDateTime, 1000);

