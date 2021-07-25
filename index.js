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
        message: 'Please enter the title of your project.',
    },
    // Project description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    // Project Installation 
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    // Credits 
    {
        type: 'input',
        name: 'credits',
        message: 'Are there any collaborators, third-party assets or tutorials that require attribution?',
    },
    // License Options
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and-Distribution', 'None'],
    },
    // GitHub Username
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username',
    },
    // Email
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address (optional)',
    },
    // Test
    {
        type: 'input',
        name: 'testing',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
