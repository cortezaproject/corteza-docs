const newWrap = () => ({
  main: undefined,
  patch: undefined,

  vIdent: undefined,
  vLabel: undefined,

  releasedOn: undefined,

  template: {
    preset: 'adoc.default',
  },
  changelog: {},
})

const defaultEntry = () => ({
  contents: [],
  formatting: {},
})

// processEntry transforms the baseEntry into a common format and expands
// some parts of it for less work later on when encoding
function processEntry(baseEntry) {
  const entries = {}
  for (const [k, contents] of Object.entries(baseEntry)) {
    const entry = defaultEntry(k)

    // skip refs because those will be handled when encoding
    // @todo consider expanding these also
    if (k === 'refs') {
      entries[k] = contents
      continue
    }

    if (Array.isArray(contents)) {
      entry.contents = contents
    } else if (!!contents) {
      entry.contents.push(contents)
    }

    entries[k] = entry
  }

  return entries
}

module.exports = (main, patch, parsed) => {
  main = main.slice(0, 4) + '.' + main.slice(4)
  const out = newWrap()

  // Determine version specific bits
  out.main = main
  out.patch = patch.split(".")[0]

  out.vIdent = `${out.main}.${out.patch}`
  out.vLabel = `${out.main.replace('.0', '.')}.${out.patch.replace(/^0/gi, '')}`

  out.releasedOn = parsed.meta.releasedOn

  // Make sure the contents are presented as they should be
  const npp = JSON.parse(JSON.stringify(parsed))
  for (const [k, changes] of Object.entries(npp)) {
    // skip sys-defined meta
    if (k === 'meta') {
      continue
    }

    const nn = []
    for (const c of changes) {
      nn.push(processEntry(c))
    }
    npp[k] = { entries: nn, template: {} }
  }

  out.changelog = npp
  return out
}
