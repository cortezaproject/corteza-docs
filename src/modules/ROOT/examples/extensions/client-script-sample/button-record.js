export default {
  label: "label goes here",
  description: "description goes here",

  triggers ({ on }) {
    return on('manual')
      .for('compose:record')
      .where('module', 'module goes here')
      .where('namespace', 'namespace goes here')
      // vv Don't remove the next line vv
      .uiProp('app', 'compose')
  },

  // If you don't need the Compose helper, remove it
  async exec ({ $record }, { Compose }) {
    // Code goes here
    // Note: unless false or an error, the return value is ignored
  },
}
