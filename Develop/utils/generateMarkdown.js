// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(response) {
  if (response.licence === "MIT") {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n
    (https://opensource.org/licenses/MIT)\n\nYou have the freedom to do as you like with this permissive software, as long as an original copy and license notice is included. I cannon be held liable for this software.\n\n`;
    return badge
  } else if (response.licence === "Apache") {
    badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n\n
    (http://www.apache.org/licenses/LICENSE-2.0.html)\n\nYou have the freedom to do as you like with this permissive software. This license also contains a patent license from the contributors of the code.\n\n`;
    return badge
  } else if (response.licence === "GPLv3") {
    badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n\n
    (http://www.gnu.org/licenses/gpl-3.0.html)\n\nYou have the freedom to run, study, share, and modify this permissive software. Anyone who acquires this software must make it available to anyone else under the same licensing agreement.\n\n`;
    return badge
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
    <h1 align="center">${answers.projectTitle} 👋</h1>
      
    ![badge](${badge})<br />
    ## Description
    🔍 ${answers.description}
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    ## Installation
    💾 ${answers.installation}
    ## Usage
    💻 ${answers.usage}
    ## License
    ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
    <br />
    This application is covered by the ${answers.license} license. 
    ## Contributing
    👪 ${answers.contributing}
    ## Tests
    ✏️ ${answers.tests}
    ## Questions
    ✋ ${answers.questions}<br />
    <br />
    :octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
    <br />
    ✉️ Email me with any questions: ${answers.email}<br /><br />
    _This README was generated with ❤️ by [README-generator](https://github.com/jpd61/README-generator) 🔥🔥🔥_
  `;
}

module.exports = generateMarkdown;