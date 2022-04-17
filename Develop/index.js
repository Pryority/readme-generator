// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [
    // TITLE
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? (REQUIRED)",
    },
    // DESCRIPTION
    {
        type: 'confirm',
        name: 'confirmDescription',
        message: 'Would you like to give the project a description?',
        default: true
    },
    {
        type: 'input',
        name: 'description',
        message: "Provide a short description explaining the what, why, and how of your project.",
        when: ({ confirmDescription }) => confirmDescription
    },
    // TABLE OF CONTENTS
    {
        type: 'confirm',
        name: 'confirmTOC',
        message: 'Would you like to give the project a table of contents section?',
        default: true
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: "Add a table of contents to make it easy for users to find what they need.",
        when: ({ confirmTOC }) => confirmTOC
    },
    // INSTALLATION
    {
        type: 'confirm',
        name: 'confirmInstallationInstructions',
        message: 'Would you like to give the project a section that explains how it should be installed?',
        default: true
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        when: ({ confirmInstallationInstructions }) => confirmInstallationInstructions
    },
    // USAGE
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to give the project a section that explains how it should be used?',
        default: true
    },
    {
        type: 'input',
        name: 'usage',
        message: "Provide instructions and examples for use. Include screenshots as needed.",
        when: ({ confirmUsage }) => confirmUsage
    },
    // LICENSE
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to give the project a section that displays the license used?',
        default: true
    },
    {
        type: 'input',
        name: 'license',
        message: "Enter the license used for this project to let other developers know what they can and cannot do with your project. If you need help choosing a license, refer to https://choosealicense.com.",
        when: ({ confirmLicense }) => confirmLicense
    },
    // CONTRIBUTING
    {
        type: 'confirm',
        name: 'confirmContributing',
        message: 'Would you like to give the project a section that tells other developers that the project is open for contributions?',
        default: true
    },
    {
        type: 'input',
        name: 'contributions',
        message: "Include guidelines for how other developers can contribute to this project.",
        when: ({ confirmContributing }) => confirmContributing
    },
    // CREDITS
    {
        type: 'confirm',
        name: 'confirmCredits',
        message: 'Would you like to give the project a section that gives credit to contributing developers, third-party assets or tutorials?',
        default: true
    },
    {
        type: 'input',
        name: 'credits',
        message: "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.",
        when: ({ confirmCredits }) => confirmCredits
    },
    // TESTS
    {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Would you like to give the project a section that gives credit to contributing developers, third-party assets or tutorials?',
        default: true
    },
    {
        type: 'input',
        name: 'tests',
        message: "Provide examples of how to run tests for the project.",
        when: ({ confirmTests }) => confirmTests
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
