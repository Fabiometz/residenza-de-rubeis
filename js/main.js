/* === RESIDENZA UDINE — main.js === */

// --- MOBILE MENU ---
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navMobile = document.getElementById('nav-mobile');

  if (hamburger && navMobile) {
    hamburger.addEventListener('click', function () {
      navMobile.classList.toggle('open');
      navMobile.style.display = navMobile.classList.contains('open') ? 'block' : 'none';
    });
  }

  // --- LINK ATTIVO ---
  const pagina = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(function (a) {
    if (a.getAttribute('href') === pagina) {
      a.classList.add('attivo');
    }
  });

  // --- FAQ ACCORDION ---
  document.querySelectorAll('.faq-domanda').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const risposta = this.nextElementSibling;
      const aperta = this.classList.contains('aperta');

      // chiude tutte
      document.querySelectorAll('.faq-domanda').forEach(function (b) {
        b.classList.remove('aperta');
        b.nextElementSibling.classList.remove('aperta');
      });

      // apre quella cliccata (toggle)
      if (!aperta) {
        this.classList.add('aperta');
        risposta.classList.add('aperta');
      }
    });
  });
});
