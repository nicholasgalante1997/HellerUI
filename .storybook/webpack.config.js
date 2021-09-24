const path = require('path');

// We receive the default storybook config as an arg
module.exports = async ({ config }) => {
  config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [["react-app", { flow: false, typescript: true }]]
        }
  });
  config.resolve.extensions.push(".ts", ".tsx");
  config.resolve.alias = {
    ...config.resolve.alias,
    "@colors": path.resolve(__dirname, "../src/colors")
};
  // don't forget to return the adapted config object
  return config;
};