const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Provide a title for your project: ',
        validate: userTitle => {
            if (userTitle) {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project',
        validate: userDesc => {
            if (userDesc) {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'List any Installation instructions here',
        validate: userInstall => {
            if (userInstall) {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
        validate: userUsage => {
            if (userUsage) {
                return true;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public'],
        validate: userLicense => {
            if (userLicense) {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: userGithub => {
            if (userGithub) {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Would you like to include your email?',
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success!')
    });
};

function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

init();