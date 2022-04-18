module.exports = description => {
    // destructure page data by section
    const { projects, about, ...header } = templateData;

    if (!description) {
        return '';
    }

    return `
    ## Description

    ${data.description}`
}
const generateTable = (table) => {
    if (!table) {
        return '';
    }

}





const generateReadme = data => {
    return `
    # ${data.title}

    ${generateDescription(description)}

    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)

    ## Installation

    What are the steps required to install your project ? Provide a step - by - step description of how to get the development environment running.

    ## Usage

   ${data.usage}

    ## Credits

    ${data.credits}

    ## License

    ${data.license}

    ---

    ## Badges

    ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)


    ## How to Contribute

    ${data.contribution}

    ## Tests

    ${data.tests}
     `
};