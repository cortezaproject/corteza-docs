const path = require('path')
const anni = require('./annotate')

const getDirPath = (doc) => {
  const imagesOutputDir = doc.getAttribute('imagesoutdir')
  const outDir = doc.getAttribute('outdir')
  const toDir = doc.getAttribute('to_dir')
  const baseDir = doc.getBaseDir()
  const imagesDir = doc.getAttribute('imagesdir') || ''
  let dirPath
  if (imagesOutputDir) {
    dirPath = imagesOutputDir
  } else if (outDir) {
    dirPath = path.join(outDir, imagesDir)
  } else if (toDir) {
    dirPath = path.join(toDir, imagesDir)
  } else {
    dirPath = path.join(baseDir, imagesDir)
  }
  return dirPath
}

function nameify (s) {
  return s.replace('/', '--').split('.')[0]
}

function processImage (doc, config, target, vfs) {
  const dirPath = getDirPath(doc)
  const format = 'svg'
  let imageName = ''
  if (!config.image.alias) {
    imageName = `${nameify(config.image.rel)}.${format}`
  } else {
    const t = config.image.rel.split('/')
    t.pop()

    imageName = nameify(t.pop() + `/${config.image.alias}`) + `.${format}`
  }

  let filePath = path.format({ dir: dirPath, base: imageName })
  const mediaType = 'image/svg+xml'


  // Load the image we wish to annotate
  const base = vfs.read(`image$${config.image.rel}`)

  vfs.add({
    relative: dirPath,
    basename: imageName,
    mediaType: mediaType,
    contents: anni.annotate(config, base),
  })
  return imageName
}

module.exports = (processor, parent, attrs, config, context) => {
  const doc = parent.getDocument()
  const caption = attrs.caption
  const title = attrs.title
  let role = attrs.role || 'annotated-image'

  const blockAttrs = Object.assign({}, attrs)
  blockAttrs.role = role
  blockAttrs.format = 'svg'

  const blockId = attrs.id
  if (blockId) {
    blockAttrs.id = blockId
  }

  let alt
  if (attrs.title) {
    alt = attrs.title
  } else if (attrs.target) {
    alt = attrs.target
  } else {
    alt = 'Annotated image'
  }
  blockAttrs.target = processImage(doc, config, attrs.target, context.vfs)
  blockAttrs.alt = alt
  const block = processor.createImageBlock(parent, blockAttrs)

  if (title) {
    block['$title='](title)
  }
  block.$assign_caption(caption, 'figure')
  return block
}
