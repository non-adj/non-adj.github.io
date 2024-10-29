import { generateSeveranceLetter } from './language-model.js';

// Wait for the document to load
document.addEventListener('DOMContentLoaded', () => {
  const jobForm = document.getElementById('job-form-element');
  const loadingScreen = document.getElementById('loading-screen');
  const punchlineScreen = document.getElementById('punchline-screen');
  const punchlineMessage = document.getElementById('punchline-message');

  // Initially hide loading and punchline screens
  loadingScreen.style.display = 'none';
  punchlineScreen.style.display = 'none';

  jobForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Show loading screen
    document.getElementById('job-form').style.display = 'none';
    loadingScreen.style.display = 'block';

    // Display misleading messages at different intervals
    setTimeout(() => {
      document.getElementById('message-1').style.display = 'block';
    }, 3000); // Show after 3 seconds

    setTimeout(() => {
      document.getElementById('message-1').style.display = 'none';
      document.getElementById('message-2').style.display = 'block';
    }, 6000); // Show after 6 seconds

    setTimeout(() => {
      document.getElementById('message-2').style.display = 'none';
      document.getElementById('message-3').style.display = 'block';
    }, 9000); // Show after 9 seconds

    // Simulate processing time
    setTimeout(async () => {
      const jobTitle = document.getElementById('job-title').value;
      const expectedWage = document.getElementById('expected-wage').value;

      // Generate severance letter message using the language model
      const message = await generateSeveranceLetter(jobTitle, expectedWage);

      // Display punchline screen with the message
      punchlineMessage.textContent = message;
      loadingScreen.style.display = 'none';
      punchlineScreen.style.display = 'block';
    }, 12000); // Simulate a 12-second processing time
  });
});
