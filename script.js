// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
});
// ===== DARK / LIGHT MODE TOGGLE =====
const toggle = document.querySelector('.theme-toggle');
const body = document.body;
const icon = toggle.querySelector('i');

// Check saved theme in localStorage
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
} else {
    body.classList.remove('dark-mode');
    icon.classList.replace('fa-sun', 'fa-moon');
}

// Toggle theme when clicked
toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});
const cvButton = document.querySelector('.btn-cv');
const popup = document.getElementById('cv-popup');
const closePopup = document.getElementById('close-popup');

cvButton.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});