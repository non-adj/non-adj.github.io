import { generateSeveranceLetter } from './language-model.js';

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

  async function generateSeveranceLetter() {
    const jobTitle = document.getElementById('job-title').value;
    const expectedWage = document.getElementById('expected-wage').value;

    const message = await generateSeveranceLetter(jobTitle, expectedWage);

    punchlineMessage.textContent = message;
    loadingScreen.style.display = 'none';
    punchlineScreen.style.display = 'block';
  }
});
