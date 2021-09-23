const path = require('path');

// We receive the default storybook config as an arg
module.exports = async ({ config }) => {
  // styles
  // appending a rule to resolve sass/scss files in the parent dir
  config.module.rules.push({
    test: /\.(sass|scss)$/,
    use: ['resolve-url-loader'],
    include: path.resolve(__dirname, '../')
  });
  
  // fonts
  // appending a rule to resolve true font files/assets in the parent dir
  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    use: [
      {
        loader: 'file-loader',
        query: {
          name: '[name].[ext]'
        }
      }
     ],
    include: path.resolve(__dirname, '../')
  });
   
  // don't forget to return the adapted config object
  return config;
};