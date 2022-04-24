// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    // TITLE
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    // DESCRIPTION
    {
        type: 'confirm',
        name: 'confirmDescription',
        message: `Give the project a description.`,
    },
    // INSTALLATION
    {
        type: 'confirm',
        name: 'confirmInstallationInstructions',
        message: 'Explain how the project should be installed.',
    },
    // USAGE
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Explain how the project should be used.',
    },
    {
        type: 'input',
        name: 'usage',
        message: "Provide instructions and examples for use.",
    },
    // LICENSE
    {
        type: "list",
        message: "Which license is the application is covered under",
        name: "license",
        choices: ["MIT", "Apache", "GPLv3"]
    },
    // GITHUB USERNAME
    {
        type: "input",
        message: "what is your Github username?",
        name: "username"
    },
    // CONTRIBUTING
    {
        type: 'input',
        name: 'contributions',
        message: "Include guidelines for how other developers can contribute to this project.",
    },
    // CREDITS
    {
        type: 'input',
        name: 'credits',
        message: "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.",
    },
    // TESTS
    {
        type: 'input',
        name: 'tests',
        message: "Provide examples of how to run tests for the project.",
    }];

// Returns the questions array as inquirer prompts
promptInput = questions => {
    return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
        }
        generateMarkdown(data);
        console.log('Your readme file has been generated!')
    });
}

// TODO: Create a function to initialize app
function init() {
    promptInput(questions);
    writeToFile('./dist/readme.md', data);
}

// Function call to initialize app
init()