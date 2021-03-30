// https://github.com/asciidoctor/docs.asciidoctor.org/blob/main/lib/collapsible-block-tree-processor.js

/**
 * Backports the collapsible block type to Asciidoctor < 2.
 */
 function collapsibleBlockTreeProcessor () {
  this.process((doc) => {
    for (const block of doc.findBy({ context: 'example' }, (candidate) => candidate.isOption('collapsible'))) {
      idAttr = block.getId() ? ` id="${block.getId()}"` : ''
      classAttr = block.isRole() ? ` class="${block.getRole()}"` : ''
      source_lines = []
      source_lines.push(`<details${idAttr}${classAttr}>`)
      if (block.hasTitle()) source_lines.push(`<summary class="title">${block.getTitle()}</summary>`)
      source_lines.push('<div class="content">')
      source_lines.push(block.getContent().split('\n'))
      source_lines.push('</div>')
      source_lines.push('</details>')
      siblings = block.getParent().getBlocks()
      siblings[siblings.indexOf(block)] = this.createBlock(block.getParent(), 'pass', source_lines)
    }
    return doc
  })
}

function register (registry, { file }) {
  if ('collapsible' in file.asciidoc.attributes) registry.treeProcessor(collapsibleBlockTreeProcessor)
}

module.exports.register = register
