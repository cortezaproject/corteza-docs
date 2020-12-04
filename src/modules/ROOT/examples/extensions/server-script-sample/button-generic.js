export default {
  label: "label goes here",
  description: "description goes here",

  triggers ({ on }) {
    return on('manual')
      // vv Don't remove the next line vv
      .uiProp('app', 'compose')
  },

  // If you don't need the Compose helper, remove it
  async exec (args, { Compose }) {
    // Code goes here
  },
}
