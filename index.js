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

function writeToFile(filename, data) {}

function init() {}

init();