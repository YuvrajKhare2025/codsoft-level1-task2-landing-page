function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function sendMessage(e) {
  e.preventDefault();
  document.getElementById("msg").innerText = "Thank you! Your message has been sent 🚀";
}

window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(r => {
    const windowHeight = window.innerHeight;
    const revealTop = r.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      r.classList.add("active");
    }
  });
}
