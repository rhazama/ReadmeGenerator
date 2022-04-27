//checks if there is no license and return to an empty string if not
// function renderLicenseBadge(license) {}

// function renderLicenseLink(license) {}

// function renderLicenseSection(license) {}

//creates a function to generate markdown for README
function generateMarkdown(data) {
    return `
<h1 align="center">${answers.title} </h1>

## Description
${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}
## Usage
${answers.usage}
## Credits
${answers.credits}
## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

## Badges
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Contributing
${answers.contributing}

## Tests
${answers.tests}
## Questions
${answers.questions}<br />
:octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
Email me with any questions: ${answers.email}<br />
    `;
}

module.exports = generateMarkdown;