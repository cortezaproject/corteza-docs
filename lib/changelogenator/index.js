const path = require('path')
const decoders = require('./decoders/index.js')
const encode = require('./encode/index.js')

// Source
let srcPath = process.env.CL_BASE
if (srcPath && !srcPath.startsWith(path.sep)) {
  srcPath = path.join(process.env.PWD, srcPath)
}
if (!srcPath) {
  srcPath = path.join(process.env.PWD, 'src', 'modules', 'ROOT', 'pages', 'changelog')
}

// Destination
let dstPath = process.env.CL_DST
if (dstPath && !dstPath.startsWith(path.sep)) {
  dstPath = path.join(process.env.PWD, dstPath)
}
if (!dstPath) {
  dstPath = path.join(process.env.PWD, 'src', 'modules', 'ROOT', 'pages', 'changelog')
}

console.debug({ srcPath, dstPath })

// Generate contents...
// @todo change to whatever when/if we expand to pull from somewhere
encode(dstPath, decoders.fs(srcPath))
