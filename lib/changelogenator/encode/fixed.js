const implode = require('./utils.js').implode
const encodeRef = require('./ref.js')

module.exports = function (entry) {
  let out = []

  if (!entry.what) {
    throw new Error("fixed requires what to outline what was fixed")
  }
  out.push(`* Fixed ${implode('what', entry)}`)

  if (entry.how) {
    out.push(`The fix was made ${implode('how', entry)}`)
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
