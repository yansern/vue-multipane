const mix = require('laravel-mix');
const mixEnv = require('laravel-mix-environments');
const argv = require('yargs').argv;

// Add absolute path @ resolver.
mix.options({
  webpackConfig: {
    resolve: {
      alias: {
        '@': path.resolve('./'),
      },
    },
  },
});

if (argv.env.entry=='src') {

  // Main script file
  mix
    .js(
      'src/index.js',
      mix.inProduction() ?
          'dist/vue-multipane.min.js' :
          'dist/vue-multipane.js'
    )
    .extract([
      'vue'
    ])
    .options({
      webpackConfig: {
        output: {
          library: 'Multipane',
          libraryTarget: 'umd',
          umdNamedDefine: true
        }
      }
    });
}

if (argv.env.entry=='demo') {

  // Demo files
  mix
    .js('demo/src/main.js', 'demo/main.js')
    .copy('demo/src/index.html', 'demo/index.html');

  if (mix.inDevelopment()) {

    // Dev Server
    const port = 8080;
    const publicPath = `http://0.0.0.0:${port}/`;

    mix.options({
      webpackConfig: {
        output: {
          publicPath: publicPath
        },
        devServer: {
          port: port,
          host: '0.0.0.0',
          publicPath: publicPath,
          public: `0.0.0.0:${port}`,
          contentBase: './demo/',
          noInfo: false,
          quiet: false,
          open: true,
          overlay: {
            warnings: true,
            errors: true
          }
        }
      }
    });
  }
}
