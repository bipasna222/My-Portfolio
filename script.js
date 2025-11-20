
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

const form = document.getElementById('messageForm');  
const popup = document.getElementById('popupMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  popup.style.display = 'block';
  popup.style.opacity = '1';

  setTimeout(() => {
    popup.style.opacity = '0';
  }, 2500);

  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000);

  form.reset();
});