const btn = document.getElementById('btn');

// Retrieve the theme preference from localStorage or default to 'light'
let isReversed = localStorage.getItem('theme') === 'dark';

// Function to update the theme based on the current state
function updateTheme() {
  if (isReversed) {
    // Reversed state: black background, white text
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';

  const head = document.getElementById('dark-light-main-header');
  if (head) 
  {
    head.style.backgroundColor = 'black';
    head.style.color ='white';
  }
  
  else
  head.style.color ='black';

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
