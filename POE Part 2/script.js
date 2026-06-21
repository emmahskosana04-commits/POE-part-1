// 1. Hamburger menu
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

// 2. Live date SA format
function updateDateTime() {
  const now = new Date();
  document.getElementById('dateTime').innerText = now.toLocaleString('en-ZA');
}
setInterval(updateDateTime, 1000);
updateDateTime();

// 3. Auto year
document.getElementById('currentYear').textContent = new Date().getFullYear();