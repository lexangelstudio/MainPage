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

// Optional: Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll behavior
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
  }
});

// Contact form interactions (optional enhancements)
document.addEventListener('DOMContentLoaded', () => {
  const contactItems = document.querySelectorAll('.contact-item');
  const socialButtons = document.querySelectorAll('.social-btn');
  
  // Add click analytics or tracking here if needed
  contactItems.forEach(item => {
    item.addEventListener('click', (e) => {
      console.log('Contact item clicked:', e.currentTarget.href);
      // Add analytics tracking here if needed
    });
  });
  
  socialButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      console.log('Social button clicked:', e