// ===== NAV MENU TOGGLE =====
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
}

// ===== COUNTER ANIMATION =====
const counters = document.querySelectorAll(".counter");
const speed = 200; // smaller = faster

const runCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

// Run counters when visible
const counterSection = document.getElementById("counters");
let started = false;

window.addEventListener("scroll", () => {
  const sectionTop = counterSection.offsetTop - window.innerHeight + 200;
  if (!started && window.scrollY > sectionTop) {
    runCounters();
    started = true;
  }
});
