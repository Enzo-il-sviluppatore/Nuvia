/* ═══════════════════════════════════════
   NUVIÁ — Shared JavaScript
   main.js
   ═══════════════════════════════════════ */

/* ── Mobile nav toggle ── */
function toggleNav() {
  document.getElementById('nav').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('visible');
}

function closeNav() {
  document.getElementById('nav').classList.remove('open');
  document.getElementById('overlay').classList.remove('visible');
}

/* ── Practice test answer reveal ── */
function ta(btn) {
  const key = btn.nextElementSibling;
  const on  = key.classList.toggle('v');
  btn.textContent = on ? 'Hide Answers' : 'Show Answers';
}

/* ── Active nav link on scroll ── */
function initScrollSpy() {
  const sections = document.querySelectorAll('[id]');
  const links    = document.querySelectorAll('#nav ul li a');
  if (!sections.length || !links.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(s => obs.observe(s));
}

document.addEventListener('DOMContentLoaded', initScrollSpy);
