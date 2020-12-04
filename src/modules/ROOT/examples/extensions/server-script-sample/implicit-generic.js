export default {
  label: "label goes here",
  description: "description goes here",

  // Use the ones you need, delete the rest
  triggers ({ before, after, on, at }) {
    return before('event goes here')
      .where('constraint goes here')
      // Add/remove constraints here
  },

  // remove async if you aren't doing any async operations
  // use object destructuring for args and ctx
  async exec(args, ctx) {
    // Code goes here
  },
}
