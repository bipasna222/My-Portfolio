// ==================== NAV SMOOTH SCROLL ====================
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ==================== SKILLS CLICK COLOR ====================
const skills = document.querySelectorAll('.skills span');
skills.forEach(item => {
  item.addEventListener('click', () => {
    item.style.background = '#ff4081';
  });
});

// ==================== SKILL BARS ANIMATION ====================
const skillBars = document.querySelectorAll('.skill-bar');
function animateSkills() {
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if(rect.top < window.innerHeight) {
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


// ==================== PROJECT CARD CLICK ====================
const projects = document.querySelectorAll('.project');
projects.forEach(p => {
  p.addEventListener('click', () => {
    window.open(p.dataset.url, "_blank");
  });
});

// ==================== SLIDER ====================
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

function showSlide(index) {
  slides.forEach((s,i)=> s.style.display = i === index ? 'block' : 'none');
}
if(nextBtn) nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
});
if(prevBtn) prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
});
showSlide(slideIndex);

// ==================== DARK/LIGHT TOGGLE ====================
const toggle = document.getElementById('themeToggle');
if(toggle) toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️Light Mode' : '🌙Dark Mode';
});

// ==================== BACK TO TOP ====================
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  if(backTop) backTop.style.display = window.scrollY > 200 ? 'block' : 'none';
});
if(backTop) backTop.addEventListener('click', () => {
  window.scrollTo({ top:0, behavior:'smooth' });
});

// ==================== WEEK 2 CANVAS ====================
(function(){
  const canvas = document.getElementById("myCanvas");
  if(!canvas) return; 
  const ctx = canvas.getContext("2d");

  let step = 0;
  let dots = 0;

  function drawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // black background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // white centered text
    ctx.fillStyle = "white";
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    let text = "";
    if(step === 0) text = "Welcome to My Portfolio";
    else if(step === 1) text = "This is Week 2 Canvas Output";
    else if(step === 2) text = "Project Loading" + ".".repeat(dots);

    ctx.fillText(text, canvas.width/2, canvas.height/2);

    requestAnimationFrame(drawCanvas);
  }

  // change message every 3 seconds
  setInterval(()=> { step = (step + 1) % 3; }, 3000);

  // animate dots for "Project Loading..."
  setInterval(()=> { if(step===2) dots = (dots+1)%4; }, 500);

  drawCanvas();
})();
