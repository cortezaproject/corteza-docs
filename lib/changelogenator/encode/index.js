const fs = require('fs')
const path = require('path')

const order = [
  "important",
  "added",
  "changed",
  "deprecated",
  "removed",
  "fixed",
  "security",
  "development",
]

const out = {}
for (const o of order) {
  out[o] = require(`./${o}.js`)
}

function encodeEntries (version) {
  const encoded = [
    "include::ROOT:partial$variables.adoc[]",
    "",
    `= \`${version.vLabel}\``,
    "",
    `*Released on*: \`${version.releasedOn}\``,
    "",
  ]

  for (const o of order) {
    const change = version.changelog[o]
    const entries = (change || {}).entries
    if (!entries || entries.length == 0) {
      continue
    }

    let pre = `.[#${version.vIdent.replace(/\./gi, '_')}-${o}]#<<${version.vIdent.replace(/\./gi, '_')}-${o},${o[0].toUpperCase()}${o.substring(1)}:>>#`
    let post = ''

    let auxLines = []
    for (const entry of entries) {
      if (out[o] instanceof Function) {
        auxLines.push(...out[o](entry))
      } else {
        auxLines.push(...out[o].encode(entry))
        if (out[o].template) {
          let { pre: auxPre, post: auxPost } = out[o].template({ vAnchor: version.vIdent.replace(/\./gi, '_') })
          if (auxPre) {
            pre = auxPre
          }
          if (auxPost) {
            post = auxPost
          }
        }
      }
    }

    auxLines.push(post)

    encoded.push(pre)
    encoded.push(...auxLines)
  }

  return encoded
}

function writeFile(dstPath, version, encoded) {
  const base = path.join(dstPath, version.main.replace('.', ''))
  fs.mkdirSync(base, { recursive: true })

  fs.writeFileSync(path.join(base, version.patch + '.gen.adoc'), encoded.join('\n'))
}

module.exports = function(dstPath, changelog) {
  for (const [ident, versions] of Object.entries(changelog)) {
    for (const v of versions) {
      writeFile(dstPath, v, encodeEntries(v))
    }
  }

  return
}
