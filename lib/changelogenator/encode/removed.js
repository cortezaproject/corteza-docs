const implode = require('./utils.js').implode
const encodeRef = require('./ref.js')

module.exports = function (entry) {
  let out = []

  if (!entry.what) {
    throw new Error("removed requires what to outline what was removed")
  }
  out.push(`* Removed ${implode('what', entry)}`)

  if (entry.why) {
    out.push(`The removal was made ${implode('why', entry)}`)
  }

  if (entry.refs) {
    out[out.length - 1] = out[out.length - 1].replace(/\./gi, '')
    const aux = []
    for (const r of entry.refs) {
      aux.push(encodeRef(r))
    }
    out.push(`(${aux.join(", ")})`)
  }

  out[out.length-1] += '.'

  return out
}
