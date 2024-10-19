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

    // Simulate processing time
    setTimeout(() => {
      const jobTitle = document.getElementById('job-title').value;
      const expectedWage = document.getElementById('expected-wage').value;

      // Generate severance letter message
      const message = `Dear ${jobTitle} Employee,\n\n` +
                      `After careful consideration, we have determined that your expected wage of $${expectedWage} ` +
                      `is higher than the cost of automating your position. Therefore, we regret to inform you that ` +
                      `your position will be automated effective immediately.\n\n` +
                      `Best regards,\n` +
                      `AI Job Matcher Team`;

      // Display punchline screen with the message
      punchlineMessage.textContent = message;
      loadingScreen.style.display = 'none';
      punchlineScreen.style.display = 'block';
    }, 2000); // Simulate a 2-second processing time
  });
});
