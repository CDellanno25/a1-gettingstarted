const typedEl = document.getElementById('typed-text');
const message = 'whoami';
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function typeMessage(text, el, speed = 120) {
  let i = 0;
  const interval = setInterval(() => {
    el.textContent = text.slice(0, i + 1);
    i++;
    if (i === text.length) clearInterval(interval);
  }, speed);
}

if (typedEl) {
  if (prefersReducedMotion) {
    typedEl.textContent = message;
  } else {
    typeMessage(message, typedEl);
  }
}

function animateSkillBars() {
  const skills = document.querySelectorAll('.skill');

  skills.forEach((skill) => {
    const level = skill.getAttribute('data-level');
    const fill = skill.querySelector('.skill-fill');
    if (!fill) return;

    if (prefersReducedMotion) {
      fill.style.width = `${level}%`;
      return;
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        fill.style.width = `${level}%`;
      });
    });
  });
}
const skillsSection = document.getElementById('skills');

if (skillsSection && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateSkillBars();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.4 }
  );
  observer.observe(skillsSection);
} else {
  animateSkillBars();
}