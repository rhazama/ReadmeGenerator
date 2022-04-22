const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

const readmeGenerator = require('./generateMarkdown.js');

//questions for users
const questions = [{
    type: "input",
    message:"What is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message: "",
    name: ""
}];

//function to write README file
function writeToFile(filename, data) {}

//function to initialize the app
function init() {}

init();