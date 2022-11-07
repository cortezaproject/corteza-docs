module.exports.implode = function(kind, entry) {
  const cc = (entry[kind] || {}).contents
  return cc.join('\n')
}
