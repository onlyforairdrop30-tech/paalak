// Main JavaScript for Samarpan College Website

document.addEventListener('DOMContentLoaded', function () {
  // Mobile Navigation Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('open');
      const isExpanded = navMenu.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });
  }

  // Handle Admission / Contact Inquiry Form
  const contactForm = document.getElementById('inquiryForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const name = document.getElementById('studentName')?.value || 'Student';
      const phone = document.getElementById('studentPhone')?.value || '';
      
      if (!phone) {
        alert('Please provide a valid contact number.');
        return;
      }

      // Show success feedback
      if (formSuccess) {
        formSuccess.style.display = 'block';
        contactForm.reset();
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        alert('Thank you, ' + name + '! Your inquiry has been received. Our admission counselor will contact you shortly.');
        contactForm.reset();
      }
    });
  }
});
