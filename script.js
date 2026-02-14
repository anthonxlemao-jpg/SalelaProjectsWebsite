// Footer year auto-update
document.getElementById("year").innerText = new Date().getFullYear();

// Compliance toggle (smooth version using .show class)
const toggleCompliance = document.getElementById("toggleCompliance");
const complianceContent = document.getElementById("complianceContent");

toggleCompliance.addEventListener("click", function() {
  if (complianceContent.classList.contains("show")) {
    complianceContent.classList.remove("show");
    this.textContent = "Show Compliance Info ▼";
  } else {
    complianceContent.classList.add("show");
    this.textContent = "Hide Compliance Info ▲";
  }
});

// Services hover effect
const services = document.querySelectorAll("#services li");

services.forEach(service => {
  service.addEventListener("mouseover", () => {
    service.style.color = "darkblue";
    service.style.fontWeight = "bold";
  });
  service.addEventListener("mouseout", () => {
    service.style.color = "black";
    service.style.fontWeight = "normal";
  });
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop form from submitting immediately

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Simple email check
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
  }

  // If validation passes
  alert("Form validated successfully. Ready to send!");
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
