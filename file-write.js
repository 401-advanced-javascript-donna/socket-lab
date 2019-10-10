const fs = require('fs').promises;

const fileWrite = (path, data) => fs.writeFile(path, data);

module.exports = fileWrite;