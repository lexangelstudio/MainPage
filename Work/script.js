// Navigation scroll effect
const app = document.querySelector('.app');
const elNav = document.querySelector('.ui-nav');

app.addEventListener('scroll',() => {
  const scroll = 2 * app.scrollTop / app.clientHeight;
  app.style.setProperty('--scroll', scroll );

  if (scroll >= .01 ) {// Navigation scroll effect
const app = document.querySelector('.app');
const elNav = document.querySelector('.ui-nav');

app.addEventListener('scroll',() => {
  const scroll = 2 * app.scrollTop / app.clientHeight;
  app.style.setProperty('--scroll', scroll );

  if (scroll >= .01 ) {
    if ( elNav.className.indexOf('-expanded') < 0 ) {
      elNav.classList.add('-expanded');
    }
  } else {
    elNav.classList.remove('-expanded');
  }
});

// Mouse glow effect
const glow = document.querySelector('.mouse-glow');
let hue = 0;

// Function to smoothly change the color
function animateColorChange() {
  // Increment the hue value. Adjust the value for the speed of the color change.
  hue += 0.5;
  if (hue > 360) {
    hue = 0; // Reset hue after a full cycle (360 degrees)
  }

  // Set the CSS variable for the glow color using HSL
  // HSL (Hue, Saturation, Lightness) is ideal for smooth color transitions
  glow.style.setProperty('--glow-color', `hsla(${hue}, 100%, 50%, 0.4)`);

  // Use requestAnimationFrame to call this function on the next frame
  requestAnimationFrame(animateColorChange);
}

// Start the color animation loop
animateColorChange();

// Event listener to make the glow follow the mouse cursor
document.addEventListener('mousemove', function(e) {
  // Get the current scroll position of the 'app' container
  const scrollTop = app.scrollTop;
  
  // Update the glow's horizontal position using the mouse's X coordinate
  glow.style.left = e.clientX + 'px';
  
  // Update the glow's vertical position by adding the scroll position to the mouse's Y coordinate
  // This compensates for the scrolling and keeps the glow aligned with the cursor
  glow.style.top = e.clientY + scrollTop + 'px';
});
    if ( elNav.className.indexOf('-expanded') < 0 ) {
      elNav.classList.add('-expanded');
    }
  } else {
    elNav.classList.remove('-expanded');
  }
});

// Mouse glow effect
const glow = document.querySelector('.mouse-glow');
let hue = 0;

// Function to smoothly change the color
function animateColorChange() {
  // Increment the hue value. Adjust the value for the speed of the color change.
  hue += 0.5;
  if (hue > 360) {
    hue = 0; // Reset hue after a full cycle (360 degrees)
  }

  // Set the CSS variable for the glow color using HSL
  // HSL (Hue, Saturation, Lightness) is ideal for smooth color transitions
  glow.style.setProperty('--glow-color', `hsla(${hue}, 100%, 50%, 0.4)`);

  // Use requestAnimationFrame to call this function on the next frame
  requestAnimationFrame(animateColorChange);
}

// Start the color animation loop
animateColorChange();

// Event listener to make the glow follow the mouse cursor
document.addEventListener('mousemove', function(e) {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});