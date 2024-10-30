function verifySeveranceLetter(letter) {
  const keywords = ['severance', 'termination', 'employment', 'position', 'end date'];
  let containsKeywords = true;

  for (const keyword of keywords) {
    if (!letter.includes(keyword)) {
      containsKeywords = false;
      break;
    }
  }

  if (containsKeywords) {
    return 'Verification successful: The letter contains all required keywords.';
  } else {
    return 'Verification failed: The letter is missing some required keywords.';
  }
}
