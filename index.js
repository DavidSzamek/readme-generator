// TODO: Include packages needed for this application
// Inquirer
const inquirer = require('inquirer');

// File System
const fs = require('fs');

// generateMarkdown link
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    // Project title            
    {
        type: 'input',
        name: 'title',
        message: 'Title: Please enter the title of your project.',
    },
    // Project description
    {
        type: 'input',
        name: 'description',
        message: 'Description: Provide a short description explaining the what, why, and how of your project.',
    },
    // Project Installation 
    {
        type: 'input',
        name: 'installation',
        message: 'Installation: What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Usage: Provide instructions and examples for use.',
    },
    // Credits 
    {
        type: 'input',
        name: 'credits',
        message: 'Credits: Are there any collaborators, third-party assets or tutorials that require attribution?',
    },
    // License Options
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'License Options: Choose a license for your project',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and-Distribution', 'Other'],
    },
     // License Other Options
     {
        type: 'input',
        name: 'other',
        message: 'If other, please enter these licenses here:',
    },
    // GitHub Username
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:',
    },
    // Email
    {
        type: 'input',
        name: 'email',
        message: '(Optional) Please enter your email address:',
    },
    // Test
    {
        type: 'input',
        name: 'testing',
        message: 'Tests: Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw (err);
            console.log('Successfully created README!')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput))
    });
};

// Function call to initialize app
init();
