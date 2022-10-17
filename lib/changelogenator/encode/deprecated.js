const implode = require('./utils.js').implode
const encodeRef = require('./ref.js')

module.exports = function (entry) {
  let out = []

  if (!entry.what) {
    throw new Error("deprecated requires what to outline what was deprecated")
  }
  out.push(`* Deprecated ${implode('what', entry)}.`)

  if (entry.why) {
    out.push(`The deprecation was made ${implode('why', entry)}`)
  }

  if (entry.refs) {
    const aux = []
    for (const r of entry.refs) {
      aux.push(encodeRef(r))
    }
    out.push(`(${aux.join(", ")})`)
  }

  out[out.length-1] += '.'

  return out
}
