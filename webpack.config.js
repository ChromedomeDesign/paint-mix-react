// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

// module.exports = {
//     entry: './src/main.jsx',
//     output: {
//         path: path.join(__dirname, '/bundle'),
//         filename: 'index_bundle.js',
//     },
//     devServer: {
//         port: 8001,
//         historyApiFallback: true, 
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.jsx?$/,
//                 exclude: /node_modules/,
//                 loader: 'babel-loader',
//             },
//             {
//                 test: /\.tsx?$/,
//                 use: 'ts-loader',
//                 exclude: /node_modules/,
//             },
//             {
//                 test: /\.css$/i,
//                 use: ['style-loader', 'css-loader'],
//             },
//         ],
//     },
//     resolve: {
//         extensions: ['.tsx', '.ts', '.js'],
//         plugins: [new TsconfigPathsPlugin({/* options: see below */})]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './src/index.html',
//         }),
//     ],
// };

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

// module.exports = {
//     entry: './src/main.jsx',
//     output: {
//         path: path.join(__dirname, '/bundle'),
//         filename: 'index_bundle.js',
//     },
//     devServer: {
//         port: 8001,
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.jsx?$/,
//                 exclude: /node_modules/,
//                 loader: 'babel-loader',
//             },
//             {
//                 test: /\.tsx?$/,
//                 use: 'ts-loader',
//                 exclude: /node_modules/,
//             },
//             {
//                 test: /\.css$/i,
//                 use: ['style-loader', 'css-loader'],
//             },
//             {
//                 test: /\.(png|jpe?g|gif|svg)$/i,
//                 use: [
//                     {
//                         loader: 'file-loader',
//                         options: {
//                             name: '[path][name].[ext]',
//                         },
//                     },
//                 ],
//             },
//         ],
//     },
//     resolve: {
//         extensions: ['.tsx', '.ts', '.js'],
//         plugins: [new TsconfigPathsPlugin({/* options: see below */})]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './src/index.html',
//         }),
//     ],
// };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './src/main.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'index_bundle.js',
    publicPath: '/' 
  },
  devServer: {
    port: 8001,
    historyApiFallback: true, 
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};

