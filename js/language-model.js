import * as tf from '@tensorflow/tfjs';
import { loadGPT2Model, generateText } from './gpt2';

// Load the GPT-2 In-Browser model
let gpt2Model;
async function loadModel() {
  gpt2Model = await loadGPT2Model();
}

// Define a generateSeveranceLetter function that takes job title and expected wage as input
async function generateSeveranceLetter(jobTitle, expectedWage) {
  if (!gpt2Model) {
    await loadModel();
  }

  // Use the GPT-2 model to generate a personalized severance letter
  const input = `Job Title: ${jobTitle}, Expected Wage: ${expectedWage}`;
  const severanceLetter = await generateText(gpt2Model, input);

  return severanceLetter;
}

// Export the generateSeveranceLetter function
export { generateSeveranceLetter };
