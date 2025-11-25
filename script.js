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


// === Step 4: Canvas Drawing (Animated Version) ===
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 20; // starting x position for the circle
let y = 75; // y position stays constant
let radius = 20;
let speed = 2;

function animate() {
  // Clear previous frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw a rectangle (like a platform)
  ctx.fillStyle = "#FF5733";
  ctx.fillRect(50, 100, 200, 20);

  // Draw a moving circle
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "#33FF57";
  ctx.fill();
  ctx.closePath();

  // Move circle
  x += speed;
  if (x + radius > canvas.width || x - radius < 0) {
    speed = -speed; // reverse direction on edge
  }

  requestAnimationFrame(animate); // loop animation
}

animate(); // start animation

// Optional: draw on click
canvas.addEventListener("click", function(e){
  const rect = canvas.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const clickY = e.clientY - rect.top;

  ctx.beginPath();
  ctx.arc(clickX, clickY, 10, 0, Math.PI*2);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
});


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
    toggle.textContent = '☀️Light Mode';
  } else {
    toggle.textContent = '🌙Dark Mode';
  }
});

// === Step 7: Back to Top Button ===
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => { backTop.style.display = window.scrollY > 200 ? 'block' : 'none'; });
backTop.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });

// === Optional: Popup message removed, handled in Step 2 now ===


