//textRecognizer.js

const { createWorker } = require('tesseract.js');

//(async () => {
async function recognizeText(imageUrl) {
  const worker = await createWorker('eng');
  
  try {
    const area = {
        left: 100,   // X coordinate of the top-left corner
        top: 100,    // Y coordinate of the top-left corner
        width: 300,  // Width of the area
        height: 200, // Height of the area
      };
    //const imageUrl = 'https://tesseract.projectnaptha.com/img/eng_bw.png'
    const { data: { text } } = await worker.recognize(imageUrl, 
        {
        //rectangle: area,
    });
    //console.log(text[0]);
    return text;
    //console.log(text[1]);
  } catch (error) {
    console.error('Error recognizing text:', error);
  } finally {
    await worker.terminate();
  }
};

const imageUrl = 'https://tesseract.projectnaptha.com/img/eng_bw.png'
recognizeText(imageUrl);
module.exports = recognizeText; // Export the function

function greeting(name) {
    return `Hello, ${name}!`;
  }

async function main() {
    const message = await greeting('Alice');
    console.log(message); // Output after 1 second: Hello, Alice!
  }
  
  // Call the main function
  main();





