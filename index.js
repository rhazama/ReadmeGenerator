const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');
const { resolve } = require('path');

//questions for users
const questions = [{
    type: 'input',
    message: 'What is the title of the project?',
    name: 'title',
    // validate: (value)=>{if(value == ""){return 'please enter a title'}},
}, {
    type: 'input',
    message: 'How do you install your app?',
    name: 'installation',
    // validate: (value)=>{if(value == ""){return 'please enter a value'}},
}, {
    type: 'input',
    message: 'Describe your project',
    name: 'description',
    // validate: (value)=>{if(value == ""){return 'please enter a value'}},
}, {
    type: 'input',
    message: 'Your email to contact',
    name: 'contact',
    // validate: (value)=>{if(value == ""){return 'please enter a value'}},
}];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile('./utils/generateMarkdown.js', fileName, err => {
        if (err) {
            reject(err);
            return;
        }
    resolve({
        ok: true,
        message: 'File created!'
    });
});
};

//function to initialize the app
function init() {
    inquirer.prompt(questions)
    .then((res) => {
        console.log(res)
    })
}

init();