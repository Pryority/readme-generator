module.exports = tableData => {
    const {
        install,
        usage,
        license,
        contributions,
        credits,
        tests
    } = tableData;

    console.log(`
  ==============================
  Add the Table of Contents Data
  ==============================
  `);
    return inquirer.prompt([
        // INSTALLATION
        {
            type: 'confirm',
            name: 'confirmInstallationInstructions',
            message: 'Would you like to give the project a section that explains how it should be installed?',
            default: true
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
            when: ({ confirmInstallationInstructions }) => confirmInstallationInstructions
        },
        // USAGE
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to give the project a section that explains how it should be used?',
            default: true
        },
        {
            type: 'input',
            name: 'usage',
            message: "Provide instructions and examples for use. Include screenshots as needed.",
            when: ({ confirmUsage }) => confirmUsage
        },
        // LICENSE
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to give the project a section that displays the license used?',
            default: true
        },
        {
            type: 'input',
            name: 'license',
            message: "Enter the license used for this project to let other developers know what they can and cannot do with your project. If you need help choosing a license, refer to https://choosealicense.com.",
            when: ({ confirmLicense }) => confirmLicense
        },
        // CONTRIBUTING
        {
            type: 'confirm',
            name: 'confirmContributing',
            message: 'Would you like to give the project a section that tells other developers that the project is open for contributions?',
            default: true
        },
        {
            type: 'input',
            name: 'contributions',
            message: "Include guidelines for how other developers can contribute to this project.",
            when: ({ confirmContributing }) => confirmContributing
        },
        // CREDITS
        {
            type: 'confirm',
            name: 'confirmCredits',
            message: 'Would you like to give the project a section that gives credit to contributing developers, third-party assets or tutorials?',
            default: true
        },
        {
            type: 'input',
            name: 'credits',
            message: "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.",
            when: ({ confirmCredits }) => confirmCredits
        },
        // TESTS
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Would you like to give the project a section that gives credit to contributing developers, third-party assets or tutorials?',
            default: true
        },
        {
            type: 'input',
            name: 'tests',
            message: "Provide examples of how to run tests for the project.",
            when: ({ confirmTests }) => confirmTests
        }
    ])
        .then(projectData => {
            tableData.arrItems.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(tableData);
            } else {
                return tableData;
            }
        });
};