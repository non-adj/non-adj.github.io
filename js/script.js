document.getElementById('jobForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Hide the input form and show the loading screen
    document.getElementById('job-input').classList.remove('active');
    document.getElementById('loading-screen').classList.add('active');
    
    // Simulate the loading screen process
    setTimeout(function() {
      // After loading, show the severance screen
      showSeveranceLetter();
    }, 4000);  // 4 seconds for effect
  });
  
  function showSeveranceLetter() {
    // Hide loading screen and show the severance letter
    document.getElementById('loading-screen').classList.remove('active');
    document.getElementById('severance-screen').classList.add('active');
    
    // Get the user's input
    const career = document.getElementById('career').value;
    const wage = document.getElementById('wage').value;
    
    // Generate the severance letter
    const letter = `
    Dear Applicant,
  
    Thank you for your interest in the position of ${career}. After reviewing your desired wage of $${wage}, our AI Recruitment system has determined that it is far more efficient and cost-effective to automate your position entirely. 
  
    We regret to inform you that your skills, while impressive, can now be replicated with 99.9% accuracy by our proprietary AI.
  
    Best of luck with your future endeavors!
  
    Sincerely,
    The AI Recruitment Team
    `;
    
    // Display the severance letter in cursive
    document.getElementById('letter').innerText = letter;
  }
  
  // Start over button functionality
  document.getElementById('start-over').addEventListener('click', function() {
    document.getElementById('severance-screen').classList.remove('active');
    document.getElementById('job-input').classList.add('active');
    document.getElementById('career').value = '';
    document.getElementById('wage').value = '';
  });