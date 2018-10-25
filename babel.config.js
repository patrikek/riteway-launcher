const presets = [
  [
    "@babel/env"
  ]
];

const plugins = [
  [
    "@babel/plugin-proposal-object-rest-spread", { "useBuiltIns": true }
  ]
];

module.exports = { presets, plugins };
