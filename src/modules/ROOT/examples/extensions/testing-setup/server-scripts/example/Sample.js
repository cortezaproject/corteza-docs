export default {
  /* istanbul ignore next */
  trigger ({ before }) {
    return before('create')
  },

  exec () {
    return 'Hello World!'
  }
}
