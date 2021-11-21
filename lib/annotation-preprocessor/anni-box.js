const sg = require('./styleguide')

module.exports.make = ({ x, y, w, h, kind }) => {
  const bx = {
    strokeWidth: sg.stroke,
    color: sg.color.primary,
    border: sg.color.light,
  }

  switch (kind) {
    case 'box':
    case 'box-note':
      bx.color = sg.color.primary
      break

    case 'box-success':
      bx.color = sg.color.success
      bx.border = sg.color.dark
      break

    case 'box-danger':
      bx.color = sg.color.danger
      bx.border = sg.color.dark
      break

    case 'box-warning':
      bx.color = sg.color.warning
      bx.border = sg.color.dark
      break

    default:
      throw new Error('unknown box kind: ' + kind)
  }

  // Calculate the position of the main box
  const ax = x - sg.padding/2
  const ay = y - sg.padding/2
  const aw = w + sg.padding*2
  const ah = h + sg.padding*2

  // Calculate the position of the box

  return `
  <g transform="translate(${x},${y})">
    <rect
      style="stroke:${bx.border};stroke-width:${bx.strokeWidth + sg.borderThickens}px;stroke-opacity:1.0;fill-opacity:0"
      width="${aw+sg.borderThickens}px"
      height="${ah+sg.borderThickens}px"
      x="${-sg.padding - sg.borderThickens/2}px"
      y="${-sg.padding - sg.borderThickens/2}px"
    />

    <rect
      style="stroke:${bx.color};stroke-width:${bx.strokeWidth}px;stroke-opacity:1;fill-opacity:0"
      width="${aw}px"
      height="${ah}px"
      x="${-sg.padding}px"
      y="${-sg.padding}px"
    />
  </g>`
}
