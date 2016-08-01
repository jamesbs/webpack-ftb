const path = require('path');
const paths = require('../paths');

module.exports = (targetPath) => 
  ([subPath]) => path.join(targetPath, subPath);