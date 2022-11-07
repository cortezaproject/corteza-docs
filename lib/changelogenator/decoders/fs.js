const wrap = require('./wrap.js')
const fs = require('fs')
const path = require('path')

module.exports = function(srcPath) {
  const changelog = {}

  // Get all major releases outlined by folders
  const releases = fs.readdirSync(srcPath)

  // Get all patch releases outlined by files in major releases
  for (const r of releases) {
    const auxPath = path.join(srcPath, r)
    if (!fs.lstatSync(auxPath).isDirectory()) {
      continue
    }

    const patches = fs.readdirSync(auxPath)
    for (const p of patches) {
      if (!p.endsWith('.json')) {
        continue
      }

      if (!changelog[r]) {
        changelog[r] = []
      }

      // Wrap the parsed changelog to a common format
      const parsed = JSON.parse(fs.readFileSync(path.join(srcPath, r, p), 'utf8'))
      changelog[r].push(wrap(r, p, parsed))
    }
  }

  return changelog
}
