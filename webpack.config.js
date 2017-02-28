var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
    entry: "./src/main",
    output: { filename: "app.bundle.js" },
    module: {
        loaders: [
            {
                test: /.ts$/,
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
    new SWPrecacheWebpackPlugin(
      {
        cacheId: 'humans-and-i-sw',
        filename: 'serviceWorker.js',
        staticFileGlobs: [
            'styles/**',
            'images/**',
        ],
        mergeStaticsConfig: true, // if you don't set this to true, you won't see any webpack-emitted assets in your serviceworker config 
        staticFileGlobsIgnorePatterns: [/\.map$/], // use this to ignore sourcemap files 
        minify: true
      }
    ),
  ]
}