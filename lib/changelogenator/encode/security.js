const implode = require('./utils.js').implode
const encodeRef = require('./ref.js')

module.exports = function (entry) {
  let out = []

  if (!entry.what) {
    throw new Error("security requires what to outline what was security")
  }
  out.push(`* ${implode('what', entry)}.`)

  if (entry.how) {
    out.push(`${implode('how', entry)}`)
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
