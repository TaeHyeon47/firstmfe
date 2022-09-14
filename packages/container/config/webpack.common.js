// module.exports = {
//   module: {
//     rules: [
//       {
//         // whenever we import in a file that ends with an extension of either in.js or just js
//         // we want it to be processed by Bable
//         test: /\.m?js$/,
//         //  do not try to run this Bable thing on any file out of our Noad module's directory.
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             // '@babel/preset-react' means that babel is going to process all the different jsx tags.
//             // So we add into our application so that a little bit of reactor related code.
//             // '@babel/preset-env' is going to transform our code in a variety of different ways.
//             // So take all these kind of ES2015, 16, 17 and so on syntax and convert it down to ES5.
//             presets: ['@babel/preset-react', '@babel/preset-env'],
//             // '@babel/plugin-transform-runtime' is going to add in a little bit of additional code just to enable some different features for our project inside the browser
//             // such as 'async await' syntax
//             plugins: ['@babel/plugin-transform-runtime'],
//           },
//         },
//       },
//     ],
//   },
// };

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};
