
const skills = document.querySelectorAll('.skills span');
skills.forEach(item => {
  item.addEventListener('click', () => {
    item.style.background = '#ff4081';
  });
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/* Contact Form Popup */
const form = document.getElementById('contactForm');
const popup = document.getElementById('popupMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent form from reloading page
  popup.style.display = 'block';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000); // popup disappears after 3 seconds
  form.reset(); // clear form
});
