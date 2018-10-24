// Compile with require hooks from reify.

const fs = require('fs');
const path = require('path');
const reify = require('reify/lib/compiler');
const original = require.extensions['.js'];

require('reify/node/runtime');

require.extensions['.js'] = function (m, filename) {
  if (/node_modules/.test(filename)) return original(m, filename);

  const source = fs.readFileSync(filename, 'utf-8');

  const reified = reify.compile(source)

  m._compile('"use strict";\n' + reified, filename);
}


