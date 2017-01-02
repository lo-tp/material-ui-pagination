

### react-component-dev-starter
----


### Quick Start
- `npm install`
- `npm run webpack-package`
- `npm run dev-server`
- visit `http://localhost:7890/`
- edit `src/index.jsx` to and the demo would change accordingly

### Configuration
Opening `config.js`, it is like this.
``` javascript
module.exports = {
  library: 'react-component-dev',
  libraryTarget: 'umd',
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
  ],
};
```
- `library` allows you to optionally specify the name of your library.
- `libraryTarget` allows you to specify the type of output. I.e. CommonJs, AMD, for usage in a script tag or as UMD module.
- `externals` allows you to specify dependencies for your library that are not resolved by webpack, but become dependencies of the output. This means they are imported from the environment during runtime.

### Test
- `npm run test`
