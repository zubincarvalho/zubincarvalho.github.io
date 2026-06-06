// ============================================================
//  Footer year
// ============================================================
document.getElementById("year").textContent = new Date().getFullYear();

// ============================================================
//  Scroll reveal: fade sections in as they enter the viewport
// ============================================================
const revealEls = document.querySelectorAll(".reveal, .section, .entry, .tile");
revealEls.forEach((el) => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
);
revealEls.forEach((el) => revealObserver.observe(el));

// ============================================================
//  Active nav link based on the section currently in view
// ============================================================
const navLinks = document.querySelectorAll(".nav__links a");
const sections = [...navLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((link) =>
          link.classList.toggle("is-active", link.getAttribute("href") === "#" + id)
        );
      }
    });
  },
  { threshold: 0.4, rootMargin: "-20% 0px -50% 0px" }
);
sections.forEach((sec) => navObserver.observe(sec));
