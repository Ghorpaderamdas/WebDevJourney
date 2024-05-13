 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const CompressionPlugin = require('compression-webpack-plugin'); // Import the CompressionPlugin
 const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
 const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { webpack } = require('webpack');
 webpack
 

 module.exports = {
   mode:'development',//production
   entry: './src/index.js',
   output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
   resolve: {
    extensions: ['.js', '.jsx'], // Add other extensions if necessary
    alias: {
      '@components': path.resolve(__dirname, 'src/static/js/components'),
       '@pages': path.resolve(__dirname, 'src/static/js/pages'),
       // Add more aliases for commonly used directories
   },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
     }),
     new CompressionPlugin({ // Add CompressionPlugin configuration here
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240, // Only assets larger than 10 KB will be compressed
      minRatio: 0.8 // Only assets that compress better than this ratio will be compressed
     }),
     new BundleAnalyzerPlugin({
       analyzerMode: 'static',
       openAnalyzer: false,
     }),
    
   ],
   module: {
     rules: [
       {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: {
           loader: 'babel-loader',
           options: {
             presets: ['@babel/preset-env', '@babel/preset-react'],
           },
         },
       },
      // {
       //  test: /swiper\.scss$/i,
       // use: ['style-loader', 'css-loader'],
      //},
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
       },
      {
         test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
           outputPath: 'images',
         },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
     },
      {
         test: /\.webp$/,
         loader: 'file-loader',
         options: {
           name: '[name].[ext]',
           outputPath: 'images',
         },
       },
       {
         test: /\.mp4$/,
        loader: 'file-loader',
         options: {
           name: '[name].[ext]',
           outputPath: 'videos',
         },
       },
       // Additional CSS handling rules
      {
        test: /\.css$/,
         include: /react-loading-skeleton/,
         use: ['style-loader', 'css-loader'],
       },
       {
         test: /\.css$/,
         include: /react-super-responsive-table/,
         use: ['style-loader', 'css-loader'],
       },
       {
         test: /\.css$/,
         include: /react-toastify/,
        use: ['style-loader', 'css-loader'],
      },
       {
         test: /\.css$/,
         include: /react-tooltip/,
        use: ['style-loader', 'css-loader'],
       },
       {
         test: /\.css$/,
        include: /video-react/,
        use: ['style-loader', 'css-loader'],
      },
      {
     test: /\.css$/,
        exclude: /node_modules/,
       use: ['style-loader', 'css-loader', 'postcss-loader'],
     },
    ],
  },
   devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
     },
   compress: true,
    port: 9000,
    port: 9000,
    
  },
};