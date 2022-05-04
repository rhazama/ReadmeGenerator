const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown.js");
const writeFile = util.promisify(fs.writeFile);

//questions for users
const questions = () => {
    return inquirer.prompt([{
    type: 'input',
    message: 'What is the title of the project?',
    name: 'title',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('please enter a title');
            return false;
        }}
}, {
    type: 'input',
    message: 'Write a description for your project',
    name: 'description',
    validate: descInput => {
        if (descInput) {
            return true;
        } else {
            console.log('please enter a description');
            return false;
        }}
}, {
    type: 'input',
    message: 'Enter deployed link: ',
    name: 'installation',
}, {
    type: 'input',
    message: 'what is this projects usage?',
    name: 'usage',
 
}, {
    type: 'input',
    message: 'Chose the license used for this project: ',
    name: 'license',
    choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
    ]
}, {
    type: 'input',
    message: 'Who contributed to this project?',
    name: 'contributing',
}, {
    type: 'input',
    message: 'Write test included',
    name: 'tests',
}, {
    type: 'input',
    message: 'What is your Github Username?',
    name: 'username',
    validate: username => {
        if (username) {
            return true;
        } else {
            console.log('Please enter a Github username');
            return false;
        }
    }
}, {
    type: 'input',
    message: 'Enter an email address for the user to contact you: ',
    name: 'email',
}
])};

// function to write README file
async function init() {
    try {
        const answers = await questions();
        const info = generateMarkdown(answers);
        await writeFile('./dist/README.md', info);
        console.log('README.md created!');
    } catch(err) {
        console.log(err);
    }
}

//function to initialize the app
// function init() {
//     inquirer.prompt(questions)
//     .then((res) => {
//         console.log(res)
//     })
// }

init();