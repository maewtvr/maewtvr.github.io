const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});



// Select all elements
const elements = document.querySelectorAll(".elements");

// Add left/right classes alternately
elements.forEach((el, index) => {
  if (index % 2 === 0) {
    el.classList.add("left");
  } else {
    el.classList.add("right");
  }
});

// Create observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, { threshold: 0.1 });

// Observe each element
elements.forEach(el => observer.observe(el));
