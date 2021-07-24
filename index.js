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
        message: 'Briefly describe your project.',
    },
    // Project Installation 
    {
        type: 'input',
        name: 'installation',
        message: 'Briefly describe any installation requirements.',
    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
    },
    // Contribution 
    {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute to this project?',
    },
    // Test
    {
        type: 'input',
        name: 'testing',
        message: 'How did you test this project?',
    },
    // License Options
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project',
    },
    // GitHub Username
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username',
    },
    // Email
    {
        type: 'input',
        name: 'email',
        message: '(Optional) Would you like to include your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
