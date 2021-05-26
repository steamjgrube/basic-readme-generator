// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        prompt: 'Enter the name of your project',
        name: 'title'
    },
    {
        type: 'input',
        prompt: 'Enter a description of your project',
        name: 'description'
    },
    {
        type: 'input',
        prompt: 'How do you use this application?',
        name: 'howtouse'
    },
    {
        type: 'input',
        prompt: 'How do you install this application?',
        name: 'howtoinstall',
    },
    {
        type: 'checkbox',
        prompt: 'Choose a license for this project',
        name: 'license',
        choices: ['MIT', 'Mozilla-Public', 'Apache', 'Common-Development-and-Distribution', 'GNU-General-Public'],
    },
    {
        type: 'input',
        prompt: 'Enter your Github username',
        name: 'github',
    },
    {
        type: 'input',
        prompt: 'Enter your email',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log("Success!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        writeFile("README.md", generateMarkdown(userInput));
    });
}

// Function call to initialize app
init();
