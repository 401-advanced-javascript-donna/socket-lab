const fs = require('fs').promises;

const fileRead = path => {

  return fs.readFile(path, 'utf8');
};

module.exports = fileRead;