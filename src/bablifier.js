// Compile with @babel/core

require('@babel/polyfill')
const fs = require('fs');
const path = require('path');
const babel = require("@babel/core");
const original = require.extensions['.js'];
const { exclude } = require('./args')

require.extensions['.js'] = function (m, filename) {

  const excludePattern = exclude
    ? new RegExp(exclude)
    : /node_modules/

  if (excludePattern.test(filename)) return original(m, filename);

  const source = fs.readFileSync(filename, 'utf-8');

  const bablified = babel.transform(source, { configFile: path.resolve(__dirname, "../babel.config.js") }).code

  m._compile('"use strict";\n' + bablified, filename);
}
