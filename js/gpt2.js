import * as tf from '@tensorflow/tfjs';
import * as gpt2 from 'gpt-2-simple';

// Load the GPT-2 In-Browser model
export async function loadGPT2Model() {
  const model = await gpt2.loadModel('124M');
  return model;
}

// Generate text using the GPT-2 model
export async function generateText(model, input) {
  const output = await model.generate({
    length: 200,
    prompt: input,
    temperature: 0.7,
  });
  return output;
}
