document.addEventListener('scroll', function () {
    let scrolled = window.scrollY;
    document.getElementById('home').style.backgroundPositionY = -(scrolled * 0.3) + 'px';
    document.getElementById('projects').style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});

// Using GSAP
gsap.to('.element', { duration: 1, opacity: 0, x: 100, ease: "power2.out" });

// Using Anime.js
anime({
  targets: '.element',
  translateX: 250,
  rotate: '1turn',
  backgroundColor: '#FFF',
  duration: 2000
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  