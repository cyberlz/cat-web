import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const ROOT_PATH =  path.resolve(__dirname);
const APP_PATH  =  path.resolve(ROOT_PATH, 'src');
const BUILD_PATH=  path.resolve(ROOT_PATH, 'dist');

export default {
  entry: [
    'react-hot-loader/patch',
    "webpack-dev-server/client?http://0.0.0.0:3000",
    'babel-polyfill',
    './src/index',
  ],
  output: {
    filename: 'assets/js/[name].[hash:8].js',
    path: BUILD_PATH,
    chunkFilename: 'assets/js/[name].[chunkhash:8].js',
    publicPath: '/',
  },
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    port: 3000,
    host: "0.0.0.0",
    publicPath: "/",
    historyApiFallback: true,
    disableHostCheck: true
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/ },
      {
        test: /\.(scss|css)$/i,
        use: [
            "style-loader?sourceMap",
            "css-loader?sourceMap",
            "postcss-loader?sourceMap",
            "resolve-url-loader?sourceMap",
            "sass-loader?sourceMap"
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)$/,
        loader: 'file-loader?name=fonts/[name].[hash:8].[ext]'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=8192&name=images/[name].[hash:8].[ext]'
      }
    ],
  },
  resolve: {
     extensions: ['.js', '.jsx'],
     alias: {
       src :  APP_PATH,
     }
  },
  plugins: [
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("development")
        },
        __DEBUG__: true
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ hash: false, template: "./index.tpl" }),
  ]
}
