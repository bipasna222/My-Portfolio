// === Original Skills Click Color ===
const skills = document.querySelectorAll('.skills span');
skills.forEach(item => {
  item.addEventListener('click', () => {
    item.style.background = '#ff4081';
  });
});

// === Smooth Scroll for Nav Links ===
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// === Step 1: Animate Skill Bars ===
const skillBars = document.querySelectorAll('.skill-bar');
function animateSkills() {
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      const progress = bar.querySelector('.progress');
      progress.style.width = bar.dataset.percent;
    }
  });
}
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// === Step 2: Form Handling + localStorage + redirect ===
const form = document.getElementById('messageForm');  
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('msg').value.trim();
  if(name === '' || email === '' || msg === '') { alert('Please fill all fields.'); return; }
  const formData = { name, email, msg };
  localStorage.setItem('formData', JSON.stringify(formData));
  window.location.href = 'form-details.html';
});

/// Step 3: Projects Click Open
const projects = document.querySelectorAll('.project');
projects.forEach(p => {
  p.addEventListener('click', () => {
    window.location.href = p.dataset.url;
  });
});


// === Step 4: Canvas Drawing ===
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#2196f3';
ctx.fillRect(20, 20, 100, 50);

// Step 5: Image Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

function showSlide(index) {
  slides.forEach((s, i) => s.style.display = i === index ? 'block' : 'none');
}

nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
});

prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
});



/// Step 6: Dark / Light Mode Toggle
const toggle = document.getElementById('themeToggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Optional: change button text
  if(document.body.classList.contains('dark-mode')) {
    toggle.textContent = '☀️ Light Mode';
  } else {
    toggle.textContent = '🌙 Dark Mode';
  }
});

// === Step 7: Back to Top Button ===
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => { backTop.style.display = window.scrollY > 200 ? 'block' : 'none'; });
backTop.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });

// === Optional: Popup message removed, handled in Step 2 now ===


