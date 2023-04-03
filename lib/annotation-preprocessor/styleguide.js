const color = {
  primary: '#0B344E',
  success: '#43AA8B',
  danger: '#E54122',
}

const boxDefault = (params = {}) => ({
  color: color.primary,
  fillOpacity: 0.1,
  stroke: 4,
  border: 0,
  borderRadius: 8,
  padding: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
  },
  ...params,
})

const imageDefault = (params = {}) => ({
  padding: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
  },
  ...params,
})

module.exports = {
  boxNote: boxDefault(),
  boxDanger: boxDefault({ color: color.danger }),
  boxSuccess: boxDefault({ color: color.success }),
  image: imageDefault(),
}
