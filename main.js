function toggleLanguage() {
  const enTexts = document.querySelectorAll('.en');
  const arTexts = document.querySelectorAll('.ar');
  const isArabic = arTexts[0].classList.contains('hidden') === false;

  enTexts.forEach(el => el.classList.toggle('hidden', !isArabic));
  arTexts.forEach(el => el.classList.toggle('hidden', isArabic));

  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = isArabic ? el.dataset.en : el.dataset.ar;
  });
}

window.onscroll = function () {
  const btn = document.getElementById('toTopBtn');
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
}
// Scroll animation for sections
document.querySelectorAll('section').forEach(section => {
  const rect = section.getBoundingClientRect();
  if (rect.top <= window.innerHeight - 100) {
    section.classList.add('visible');
  }
});


function scrollToTop() {
window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
document.querySelectorAll('section').forEach(section => {
  const rect = section.getBoundingClientRect();
  if (rect.top <= window.innerHeight - 100) {
    section.classList.add('visible');
  }
});
});
