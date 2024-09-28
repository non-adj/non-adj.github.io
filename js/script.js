// Wait for the document to load
document.addEventListener("DOMContentLoaded", function() {
  
  // Get the button and form elements
  const button = document.getElementById('submit-button');
  const form = document.getElementById('job-form-element');
  const jobFormDiv = document.getElementById('job-form');
  const loadingScreen = document.getElementById('loading-screen');
  const punchlineScreen = document.getElementById('punchline-screen');
  
  // Hide loading and punchline screens initially
  loadingScreen.style.display = 'none';
  punchlineScreen.style.display = 'none';

  // Add event listener to the form
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the page from refreshing

    // Get user input
    const jobTitle = document.getElementById('job-title').value;
    const expectedWage = document.getElementById('expected-wage').value;

    // Show loading screen
    jobFormDiv.style.display = 'none';
    loadingScreen.style.display = 'block';

    // Simulate a delay for the punchline
    setTimeout(function() {
      loadingScreen.style.display = 'none';
      punchlineScreen.style.display = 'block';
      
      // Generate punchline content
      const punchlineText = `Dear applicant, we regret to inform you that your expected wage of ${expectedWage} for the job title "${jobTitle}" is too high. It's much more affordable to automate this position using AI.`;
      document.getElementById('punchline-message').textContent = punchlineText;

    }, 2000); // Delay in milliseconds
  });
});
