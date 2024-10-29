document.addEventListener('DOMContentLoaded', () => {
  const jobForm = document.getElementById('job-form-element');
  const loadingScreen = document.getElementById('loading-screen');
  const punchlineScreen = document.getElementById('punchline-screen');
  const punchlineMessage = document.getElementById('punchline-message');

  loadingScreen.style.display = 'none';
  punchlineScreen.style.display = 'none';

  jobForm.addEventListener('submit', (event) => {
    event.preventDefault();

    document.getElementById('job-form').style.display = 'none';
    loadingScreen.style.display = 'block';

    setTimeout(() => {
      document.getElementById('message-1').style.display = 'block';
    }, 3000);

    setTimeout(() => {
      document.getElementById('message-1').style.display = 'none';
      document.getElementById('message-2').style.display = 'block';
    }, 6000);

    setTimeout(() => {
      document.getElementById('message-2').style.display = 'none';
      document.getElementById('message-3').style.display = 'block';
    }, 9000);

    setTimeout(() => {
      generateSeveranceLetter();
    }, 12000);
  });

  function generateSeveranceLetter() {
    const jobTitle = document.getElementById('job-title').value;
    const expectedWage = document.getElementById('expected-wage').value;

    const message = `Dear ${jobTitle} Employee,\n\n` +
                    `After careful consideration, we have determined that your expected wage of $${expectedWage} ` +
                    `is higher than the cost of automating your position. Therefore, we regret to inform you that ` +
                    `your position will be automated effective immediately.\n\n` +
                    `Best regards,\n` +
                    `AI Job Matcher Team`;

    punchlineMessage.textContent = message;
    loadingScreen.style.display = 'none';
    punchlineScreen.style.display = 'block';
  }
});
