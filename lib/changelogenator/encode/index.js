const fs = require('fs')
const path = require('path')

const order = [
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

    encoded.push(`.[#${version.vIdent.replace(/\./gi, '_')}-${o}]#<<${version.vIdent.replace(/\./gi, '_')}-${o},${o[0].toUpperCase()}${o.substring(1)}:>>#`)

    for (const entry of entries) {
      encoded.push(...out[o](entry))
    }

    encoded.push('')
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
