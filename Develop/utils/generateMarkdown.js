function generateMarkdown(data) {
  return `# ${data.title}
  ## Licensing:
  [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Additional Info](#additional-info)
  ## Description:
  ${data.description}
  ## Installation:
  ${data.howtoinstall}
  ## Usage:
  ${data.howtouse}
  ## License:
  ${data.license}
  ## Additional Info:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email} `;
}

module.exports = generateMarkdown;