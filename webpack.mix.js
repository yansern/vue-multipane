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
    const port = 8012;
    const publicPath = `http://localhost:${port}/`;

    mix.options({
      webpackConfig: {
        output: {
          publicPath: publicPath
        },
        devServer: {
          port: port,
          publicPath: publicPath,
          public: `localhost:${port}`,
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
