// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: 'confirm',
        name: 'confirmDescription',
        message: 'Would you like to give the project a description?',
        default: true
    },
    {
        type: 'confirm',
        name: 'confirmTOC',
        message: 'Would you like to give the project a table of contents?',
        default: true
    },
    {
        type: "input",
        name: "author",
        message: "What is the author's name?",
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
