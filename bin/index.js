#!/usr/bin/env node

const path = require('path');
const glob = require('glob');
const { patterns } = require('../src/args')

require('../src/bablifier');

patterns.forEach(function (pattern) {
  glob(pattern, function (err, matches) {
    if (err) throw err;

    matches.forEach(function (match) {
      require(path.resolve(process.cwd(), match));
    });
  });
});
