# craco-svg-sprite-loader-plugin

## Dependencies

This plugins depends on CRACO so make sure to follow the installation instructions before installing and setting up this plugin.

https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#installation

## Install

```
npm install --save-dev craco-svg-sprite-loader-plugin
```

## Usage

```javascript
const path = require('path')

const cracoSvgSpriteLoaderPlugin = require('craco-svg-sprite-loader-plugin')

module.exports = {
  plugins: [{
    plugin: cracoSvgSpriteLoaderPlugin,
    options: {
      svgDirectory: path.resolve(__dirname, 'path-to-svg'),
      svgSpriteLoaderOptions: {...},
      svgoLoaderOptions: {...}
    }
  }]
}
```

## License

Licensed under the MIT License, Copyright ©️ 2022 Alex Komzoltsev. See LICENSE.md for more information.
