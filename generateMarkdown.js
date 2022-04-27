//checks if there is no license and return to an empty string if not
function renderLicenseBadge(license) {}

function renderLicenseLink(license) {}

function renderLicenseSection(license) {}

//creates a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
${data.contact} ${data.description}
`;
}

module.exports = generateMarkdown;