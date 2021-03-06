// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description:
  ${data.description}

  ## Table of Contents 
  1. [Project Description](#description)
  2. [Project Installation](#installation)
  3. [Usage](#usage)
  4. [Credits](#credits)
  5. [License] (#licensing)
  6. [Additional Info](#github)
  7. [Testing](#testing)
  
  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Credits:
  ${data.credits}

  ## License:
  ${data.licensing}
  
  [![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)

  ${data.other}

  ## Additional Info:
  - Follow me on GitHub at [${data.github}](https://github.com/${data.github})
  - For additional help or questions about collaboration, please reach out to my email at ${data.email}
  
  ## Test Instructions:
  ${data.testing}` 
  ;
}

module.exports = generateMarkdown;
