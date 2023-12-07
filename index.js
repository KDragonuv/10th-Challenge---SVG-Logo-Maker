const inquirer = require('inquirer');  
const fs = require('fs');
const generateSVG = require('./lib');  

async function main() { // <= Questions of design & Lettering to the user. 
  try {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: input => input.length <= 3,
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color:',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hexadecimal):',
      },
    ]);

    generateSVG(userInput); // <= Call the function to generate the SVG based on the user input

     console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();



