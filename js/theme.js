const btn = document.getElementById('btn');

// Retrieve the theme preference from localStorage or default to 'light'
let isReversed = localStorage.getItem('theme') === 'dark';

// Function to update the theme based on the current state
function updateTheme() {
  if (isReversed) {
    // Reversed state: black background, white text
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';

    const nav = document.getElementById('nav');
    if (nav) {
      nav.style.backgroundColor = 'white';
      nav.style.color = 'black';
    }

    const footer = document.getElementById('footer');
    if (footer) {
      footer.style.backgroundColor = 'white';
      footer.style.color = 'black';
    }
  } else {
    // Original state: white background, black text
    document.body.style.backgroundColor = 'white';  
    document.body.style.color = 'black';

    const nav = document.getElementById('nav');
    if (nav) {
      nav.style.backgroundColor = 'black';
      nav.style.color = 'white';
    }

    const footer = document.getElementById('footer');
    if (footer) {
      footer.style.backgroundColor = 'black';
      footer.style.color = 'white';
    }
  }
}

// Initial theme setup
updateTheme();

// Event listener for button click
btn.addEventListener('click', function onClick(event) {
  // Toggle the reversed state
  isReversed = !isReversed;

  // Update the theme in localStorage
  localStorage.setItem('theme', isReversed ? 'dark' : 'light');

  // Update the theme
  updateTheme();
});
