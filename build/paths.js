const path = require('path');

const paths = {
  project: path.join(__dirname, '../') // depends on where this file is in filesystem
};

paths.dist = path.join(paths.project, '../');

module.exports = paths;
