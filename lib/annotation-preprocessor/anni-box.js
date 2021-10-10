const sg = require('./styleguide')

module.exports.make = ({ x, y, w, h, kind }) => {
  const bx = {
    strokeWidth: sg.strokeThin,
    color: sg.clrPrimary,
  }

  x -= (sg.anniPadding/2 + bx.strokeWidth / 2)
  y -= (sg.anniPadding/2 + bx.strokeWidth / 2)
  w += (sg.anniPadding + bx.strokeWidth)
  h += (sg.anniPadding + bx.strokeWidth)

  switch (kind) {
    case 'box':
      bx.color = sg.clrPrimary
      break

    case 'box-danger':
      bx.color = sg.clrDanger
      break
    
    case 'box-light':
      bx.color = sg.clrLight
      break

    default:
      throw new Error('unknown box kind: ' + kind)
  }

  return `
<rect
 style="stroke:${bx.color};stroke-width:${bx.strokeWidth}px;stroke-opacity:1;fill-opacity:0"
 width="${w}px"
 height="${h}px"
 x="${x}px"
 y="${y}px" />`
}
