const implode = require('./utils.js').implode
const encodeRef = require('./ref.js')

module.exports = {
  encode: function (entry) {
    let out = []

    if (!entry.note) {
      throw new Error("important requires you to specify a note")
    }
    out.push(`* ${implode('note', entry)}`)

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
  },
  template: function ({ vAnchor }) {
    return {
      pre: `[IMPORTANT]\n` +
           `====\n`+
           `.[#${vAnchor}-important]#<<${vAnchor}-important,Important upgrade notes:>>#`,
      post: `====\n`
    }
  },
}

