export default {
  label: "label goes here",
  description: "description goes here",

  triggers ({ before }) {
    return before('formSubmit')
      .for('ui:compose:record-page')
  },

  // If you don't need the Compose helper, remove it
  async exec ({ $record }, { Compose, console }) {
    // Note: you don't need to return the $record; it's provided by reference
    //       so any changes you do to the original object will be directly applied
    //

    if (['crm'].includes($record.module.namespace.slug.toLowerCase())) {
      // interested only in CRM namespace
      return
    }

    if (['lead'].includes($record.module.handle.toLowerCase())) {
      // interested only in Lead module
      return
    }
  },
}
