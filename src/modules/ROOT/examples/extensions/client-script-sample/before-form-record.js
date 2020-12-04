export default {
  label: "label goes here",
  description: "description goes here",

  triggers ({ before }) {
    return before('formSubmit')
      .for('compose:record')
      .where('module', 'module goes here')
      .where('namespace', 'namespace goes here')
  },

  // If you don't need the Compose helper, remove it
  async exec ({ $record }, { Compose }) {
    // Code goes here
    // Note: you don't need to return the $record; it's provided by reference
  },
}
