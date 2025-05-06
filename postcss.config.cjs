module.exports = {
  plugins: [
    [
      '@csstools/postcss-global-data',
      {
        files: ['./src/styles/tokens/media-queries.css'],
      },
    ],
    [
      'postcss-custom-media',
      {
        preserve: false, // The preserve option determines whether the original notation is preserved.
      },
    ],
    [
      'postcss-rem',
      {
        name: 'pxrem', // Default to 'rem-convert'
      },
    ],
    ['postcss-nesting', {}],
  ],
}
