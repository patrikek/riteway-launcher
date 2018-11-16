const minimist = require('minimist')

const args = minimist(process.argv.slice(2), {
  alias: {
    e: 'exclude'
  }
})

Object.assign(args, { patterns: args._ })

module.exports = args
