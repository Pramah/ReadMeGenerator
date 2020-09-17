function generateMarkdown(data) {

  const avatar = `https://github.com/${data.username}.png?size=50`;
  const gitHub = `https://img.shields.io/badge/Github-${data.username}-4cbbb9`;
  const license = `http://img.shields.io/badge/license-${data.license}-brightgreen.svg`;

  return `
# title ==> ${data.title}
## Description==> ${data.description}
## Usage ==>  ${data.usage}
## License ==> ${data.license}
## Contributions ==> ${data.contributions}
## Tests==> ${data.tests}
## Questions==> ${data.questions}
## Github ==> ${gitHub}
## Picture ==> ${avatar}
## email ==> ${data.email}
`;
}

module.exports = generateMarkdown;