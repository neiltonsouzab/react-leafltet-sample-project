const { babelInclude, override } = require('customize-cra');
const { resolve } = require('path');


module.exports = {
  webpack: override(
    babelInclude([
      resolve('src'),
      resolve('node_modules/@react-leaflet'),
      resolve('node_modules/react-leaflet'),
    ]),
  ),
}
