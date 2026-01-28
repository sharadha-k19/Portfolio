// ================= SMOOTH SCROLL =================
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Simple enhancement
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      console.log("Navigation clicked");
    });
  });
  // Minimal JS (not mandatory)
console.log("Portfolio Loaded"); 