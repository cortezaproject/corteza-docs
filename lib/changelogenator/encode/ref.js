const refEncoders = [{
  match: function(ref) {
    return ref.startsWith("https://github.com/cortezaproject")
  },
  encode: function(ref) {
    ref = ref.replace("https://github.com/cortezaproject/", "").split("/")
    const repo = ref[0]
    const hash = ref[2].substring(0, 7)
  
    return `{${repo.split("-").slice(1).join("_").toUpperCase()}_COMMIT_BASE}${hash}[\`${hash}\`]`
  }
}]


module.exports = function (ref) {
  for (const encoder of refEncoders) {
    if (!encoder.match(ref)) {
      continue
    }

    return encoder.encode(ref)
  }
  throw new Error("unsupported ref encoding")
}