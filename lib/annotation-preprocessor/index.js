const ospath = require('path')
const proc = require('./proc.js')

function vfsWrapper (file, contentCatalog, vfs) {
  return {
    add: (image) => {
      const { component, version, module } = file.src
      if (!contentCatalog.getById({ component, version, module, family: 'image', relative: image.basename })) {
        contentCatalog.addFile({
          contents: image.contents,
          src: {
            component,
            version,
            module,
            family: 'image',
            mediaType: image.mediaType,
            path: ospath.join(image.relative, image.basename),
            basename: image.basename,
            relative: image.basename
          }
        })
      }
    },
    read: (resourceId, format) => {
      const target = contentCatalog.resolveResource(resourceId, file.src)
      return target.contents
    }
  }
}

function annotationBlock (context) {
  return function () {
    const self = this
    self.onContext(['listing', 'literal'])
    self.positionalAttributes(['target', 'format'])
    self.process((parent, reader, attrs) => {
      const config = reader.$read()
      return proc(this, parent, attrs, JSON.parse(config), context)
    })
  }
}

module.exports.register = function register (registry, context = {}) {
  context.vfs = vfsWrapper(context.file, context.contentCatalog, context.vfs)
  registry.block('annotation', annotationBlock(context))
  return registry
}
