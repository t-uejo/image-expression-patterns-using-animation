const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: {
    main: "./src/js/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/index.js",
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, "src"),
  },
  module: {
    rules: [
      // {
      //   test: /\.js/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: "babel-loader",
      //       options: {
      //         presets: ["@babel/preset-env"],
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(css|sass|scss)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|svg|webp)/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
        use: [
          {
            loader: "image-webpack-loader",
            // options: {
            //   pngquant: {
            //     quality: [0.65, 0.9],
            //     speed: 4,
            //   },
            //   mozjpeg: {
            //     progressive: true,
            //   },
            //   webp: {
            //     quality: 75,
            //   },
            // },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./styles/style.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
