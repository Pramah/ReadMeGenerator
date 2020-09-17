const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

function askQuestions() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your user GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },
        {
            type: "input",
            message: "Title for the project?",
            name: "title"
        },
        {
            type: "input",
            message: "Description of your project.",
            name: "description"
        },
        {
            type: "input",
            message: "What packages need to be installed to run your project.",
            name: "installation"
        },
        {
            type: "input",
            message: "Please provide an example of how your project can be used.",
            name: "usage"
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license would you like to have?",
            name: "license",
            choices: ["MIT", "ISC", "Perl"]
        },
        {
            type: "input",
            message: "List out all contributors",
            name: "contributions"
        },
        {
            type: "input",
            message: "What command is used to run a test",
            name: "tests",
        },
        {
            type: "input",
            message: "Do you have any questions?",
            name: "questions",
        }
    ]);
}

function WriteToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function (err) {
        if (err) {
            throw err;
        }
        console.log("You have successfully written your README file");
    });
}

async function init() {
    try {
        const answers = await askQuestions();
        generateMarkdown(answers);
        WriteToFile("README.md", generateMarkdown(answers));

    } catch (err) {
        console.log(err);
    }
}

init();