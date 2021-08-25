const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

// eslint-disable-next-line no-undef
module.exports = (envVars) => {
  const { env } = envVars;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);
  return config;
};
