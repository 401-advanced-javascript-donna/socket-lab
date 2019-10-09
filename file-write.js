const fs = require('fs').promises;

const fileWrite = path => fs.writeFile(path, 'utf8');

module.exports = fileWrite;