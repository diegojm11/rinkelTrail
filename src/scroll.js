const navEl = document.querySelector('.navbar');

function handleScroll() {
  if (window.scrollY > 30) {
    navEl.classList.add('navbar-scrolled');
  } else {
    navEl.classList.remove('navbar-scrolled');
  }
}

window.addEventListener('scroll', handleScroll);