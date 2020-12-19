
module.exports = generateMarkdown;

function generateMarkdown(data) {
 
  const avatar = `https://github.com/${data.username}.png?size=50`;
  const gitHub = `https://img.shields.io/badge/Github-${data.username}-4cbbb9`;
  const license = `http://img.shields.io/badge/license-${data.license}-brightgreen.svg`;

  return `# *${data.title}*
  ## Description:
  ${data.description}
  
  ## Table of contents:
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions
  ## Installation:
  > ${data.installation}
  ## Usage:
  ${data.usage}
  ## License:
  ${data.license}
  ## Contributions:
  ${data.contributions}
  ## Tests:
  ${data.tests}
  ## Questions:
  ${data.questions}
  ## Github:
  ${gitHub}
  ## Avatar:
  ${avatar}
  ## Email:
  ${data.email}
`;


}

