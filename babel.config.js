/* eslint-disable @typescript-eslint/no-var-requires */
const commonBabelConfig = require('./scripts/babel/common.config');

module.exports = (api) => {
  api.cache(true);
  return commonBabelConfig({
    envOptions: {
      modules: false,
    },
  });
};
