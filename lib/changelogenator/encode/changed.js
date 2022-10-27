const implode = require('./utils.js').implode
const encodeRef = require('./ref.js')

module.exports = function (entry) {
  let out = []

  if (!entry.what) {
    throw new Error("changed requires what to outline what was changed")
  }
  out.push(`* Changed ${implode('what', entry)}`)

  if (entry.why) {
    out.push(`The change was made ${implode('why', entry)}`)
  }

  if (entry.how) {
    out.push(`The change was made ${implode('how', entry)}`)
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
