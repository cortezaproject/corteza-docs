const sg = require('./styleguide')

module.exports.make = ({ x, y, w, h, kind, padding = 'md' }) => {
  if (!(['xs', 'sm', 'md', 'lg'].includes(padding))) {
    throw new Error('Unknown padding: ' + padding)
  }

  let bx = sg.boxNote

  switch (kind) {
    case 'box':
    case 'box-note':
      bx = sg.boxNote
      break

    case 'box-success':
      bx = sg.boxSuccess
      break

    case 'box-danger':
      bx = sg.boxDanger
      break

    default:
      throw new Error('unknown box kind: ' + kind)
  }

  // Calculate the position of the main box
  const p = bx.padding[padding]

  const aw = w + p*2
  const ah = h + p*2

  // Calculate the position of the box

  return `
  <!-- use this to help with alignment -->
  <rect
    style="stroke:#FF0000FF;stroke-width:1px;stroke-opacity:1.0;fill-opacity:0"
    visibility="hidden"
    x="${x}px"
    y="${y}px"
    width="${w}px"
    height="${h}px" />

  <g transform="translate(${x},${y})">
    <rect
      style="stroke:${bx.color};fill:${bx.color};stroke-width:${bx.stroke}px;stroke-opacity:1;fill-opacity:${bx.fillOpacity};rx:${bx.borderRadius}px;"
      width="${aw}px"
      height="${ah}px"
      x="${-p}px"
      y="${-p}px"
    />
  </g>`
}
