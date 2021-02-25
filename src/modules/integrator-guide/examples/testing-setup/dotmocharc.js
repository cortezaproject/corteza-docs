module.exports = {
  require: [
    'esm',
  ],
  'full-trace': true,
  bail: true,
  recursive: true,
  extension: ['.test.js'],
  spec: [
    'client-scripts/**/*.test.js',
    'server-scripts/**/*.test.js',
  ],
  'watch-files': [ 'src/**' ],
}
