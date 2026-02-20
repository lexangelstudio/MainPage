// Log to confirm the script file is loaded and running
console.log('script.js loaded and running! 🎉');

// CSS Property support check
if (typeof window.CSS.registerProperty === 'function') {
  console.log('CSS.registerProperty supported 🎉');
  document.body.style.setProperty('--supported', 1);
  document.body.classList.add('registerProperty-supported');
} else {
  console.log('CSS.registerProperty not supported ❌');
  document.body.style.setProperty('--not-supported', 1);
  document.body.classList.add('registerProperty-not-supported');
}

// Navigation scroll functionality
const elNav = document.querySelector('.ui-nav');
if (elNav) {
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    
    if (scroll >= 10) {
      if (elNav.className.indexOf('-expanded') < 0) {
        console.log('adding expanded class');
        elNav.classList.add('-expanded');
      }
    } else {
      elNav.classList.remove('-expanded');
    }
  });
}

// Optional: Add smooth scrolling for better UX
document.documentElement.style.scrollBehavior = 'smooth';

// Add loading animation to contact card
const contactCard = document.querySelector('div[role="button"]');
if (contactCard) {
  contactCard.style.opacity = '0';
  contactCard.style.transform = 'translateY(20px)';
  contactCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  
  // Animate in after a short delay
  setTimeout(() => {
    contactCard.style.opacity = '1';
    contactCard.style.transform = 'translateY(0)';
  }, 300);

  // Use event delegation for all button clicks inside the contact card
  contactCard.addEventListener('click', (e) => {
    // Log to confirm the event listener on the parent is active
    console.log('Click detected inside the main contact section.');
    
    const clickedElement = e.target.closest('a');
    if (clickedElement) {
      const url = clickedElement.href;
      
      if (clickedElement.classList.contains('social-btn')) {
        // Log the social button click and open in a new window
        console.log('Social button clicked. Opening new window to:', url);
        e.preventDefault();
        window.open(url, '_blank');
      } else if (clickedElement.classList.contains('contact-item')) {
        // Log the contact link click and let the browser handle it
        console.log('Contact link clicked. Browser will handle navigation:', url);
        // No e.preventDefault() here, let the browser handle 'tel:' and 'mailto:' links
      }
    }
  });
}