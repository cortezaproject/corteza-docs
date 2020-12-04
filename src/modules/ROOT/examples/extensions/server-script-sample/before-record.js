export default {
  label: "label goes here",
  description: "description goes here",

  triggers ({ before }) {
    return before('create', 'update')
      .for('compose:record')
      .where('module', 'module goes here')
      .where('namespace', 'namespace goes here')
  },

  // If you don't need the Compose helper, remove it
  async exec ({ $record }, { Compose }) {
    // Code goes here

    return $record
  },
}
