// scripts.js - theme, form and navbar behavior
// Dark default unless user previously selected a theme

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');

  const saved = localStorage.getItem('site-theme');
  const initial = saved ? saved : 'dark';
  if (initial === 'dark') root.setAttribute('data-theme', 'dark'); else root.removeAttribute('data-theme');
  if (toggle) toggle.checked = (initial === 'dark');

  if (toggle) {
    toggle.addEventListener('change', (e) => {
      const isDark = e.target.checked;
      if (isDark) root.setAttribute('data-theme', 'dark'); else root.removeAttribute('data-theme');
      localStorage.setItem('site-theme', isDark ? 'dark' : 'light');
    });
  }

  // Navbar shadow on scroll
  const nav = document.getElementById('mainNavbar');
  if (nav) {
    const toggleShadow = () => {
      if (window.scrollY > 40) nav.classList.add('shadow-lg'); else nav.classList.remove('shadow-lg');
    };
    window.addEventListener('scroll', toggleShadow);
    toggleShadow();
  }

  // Contact form
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name')?.value.trim();
      const email = document.getElementById('email')?.value.trim();
      const message = document.getElementById('message')?.value.trim();
      const alertEl = document.getElementById('formAlert');
      if (!name || !email || !message) {
        if (alertEl) alertEl.innerHTML = '<div class="alert alert-warning">Please fill in all fields.</div>';
        return;
      }
      if (alertEl) alertEl.innerHTML = '<div class="alert alert-success">Message sent! I will reply shortly.</div>';
      form.reset();
    });
  }
});