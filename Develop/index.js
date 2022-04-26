// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
let path = './README.md'
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
        type: 'input',
        name: 'description',
        message: 'Give the project a description.',
    },
    // INSTALLATION
    {
        type: 'input',
        name: 'installation',
        message: 'Explain how the project should be installed.',
    },
    // USAGE
    {
        type: 'input',
        name: 'usage',
        message: 'Explain how the project should be used.',
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
        name: "username",
        message: "What is your Github username?",
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
    },
    // EMAIL
    {
        type: 'input',
        name: 'email',
        message: "Provide your email where others can contact you or ask questions.",
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            console.log(err)
        }
    });
    console.log('Your readme file has been generated!')
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (response) {
            writeToFile(path, response)
        })
};

// Function call to initialize app
init();
